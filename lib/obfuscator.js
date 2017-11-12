// More config options at: https://service.javascriptobfuscator.com/httpapi.asmx?WSDL
// More data about Javascript Obfuscator HTTP API at: http://javascriptobfuscator.com/downloads.aspx

const https = require('https');
const defaults = require('./defaults');

class Obfuscator {

    obfuscate(fileName, fileCode, options, onError, onSuccess) {
        this._onError = onError;
        this._onSuccess = onSuccess;

        const project = this._buildProjectOptions(options);

        const item = {
            FileName: fileName,
            FileCode: fileCode
        };

        project.Items = [item];
        try {
            this._makeRequest(project, this._onResponse.bind(this));
        } catch (e) {
            this._onError(e);
        }
    }

    _onResponse(res) {
        if (res.Type !== "Succeed") {
            const {ErrorCode, Message} = res;
            this._onError(`${ErrorCode}: ${Message}`);
            return;
        }

        const obfuscated = res.Items[0].FileCode;
        this._onSuccess(obfuscated);
    }

    _buildProjectOptions(options) {
        return {
            ...defaults,
            ...options
        }
    }

    _makeRequest(body, cb) {
        const options = {
            method: 'POST',
            hostname: 'service.javascriptobfuscator.com',
            port: null,
            path: '/HttpApi.ashx',
            headers: {
                'content-type': 'text/json'
            }
        };

        const req = https.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                const body = JSON.parse(Buffer.concat(chunks).toString());
                cb(body);
            });
        });

        req.write(JSON.stringify(body));
        req.end();
    }
}

module.exports = Obfuscator;
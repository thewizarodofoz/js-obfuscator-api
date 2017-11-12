# JS Obfuscator Grunt Task

Obfuscate your JS code using the formal (paid) HTTP API of <http://www.javascriptobfuscator.com>.

**You need a [Premium Membership Subscription](http://www.javascriptobfuscator.com/premium-membership.aspx) in order to use this package.**
## Usage
### Install using NPM:
```bash
$ npm i -D js-obfuscator-api
```

### Add an entry in Gruntfile.js:
```js
grunt.initConfig({

    obfuscate: {
        dist: {
            src: 'mock.js',
            dest: 'out.js',
            obfuscateOptions: {
                APIKey: '***',
                APIPwd: '***'
            }
        }
    }
});
```

Check out the [default options](../blob/master/lib/defaults.js) and 
read more about obfuscation options at: <https://service.javascriptobfuscator.com/httpapi.asmx?WSDL>.

### API key and password:
It is **NOT** recommended to put these hard coded in `Gruntfile.js`. You **should** pass them as environment variables using `process.env`.
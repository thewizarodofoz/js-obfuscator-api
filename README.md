![Langauge](https://badge.langauge.io/thewizarodofoz/js-obfuscator-api)

# JS Obfuscator Grunt Task

Obfuscate your JS code using the formal (paid) HTTP API of <http://www.javascriptobfuscator.com>.

**You need a [Premium Membership Subscription](http://www.javascriptobfuscator.com/premium-membership.aspx) in order to use this package.**
## Usage
### Install using NPM:
```bash
$ npm i -D js-obfuscator-api
```

### Gruntfile.js:
```js
module.exports = function (grunt) {
    require('js-obfuscator-api')(grunt);

    grunt.initConfig({

        obfuscate: {
            dist: {
                src: 'dist/bundle.js',
                dest: 'dist/bundle.js',
                obfuscateOptions: {
                    APIKey: process.env.OBFUSCATOR_API_KEY,
                    APIPwd: process.env.OBFUSCATOR_API_PWD,
                    VariableExclusion: '^_get_ ^_set_ ^_mtd_',
                    EncodeStrings: true,
                    MoveStrings: true,
                    ReplaceNames: true,
                    WriteFormats_KeepIndent: false
                }
            }
        }
        
    });

    grunt.registerTask('deploy', ['obfuscate:dist']);
};
```

Check out the [default options](../master/lib/defaults.js) and 
read more about obfuscation options at: <https://service.javascriptobfuscator.com/httpapi.asmx?WSDL>.

### API key and password:
It is **NOT** recommended to put these hard coded in `Gruntfile.js`. You **should** pass them as environment variables using `process.env`.

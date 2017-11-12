const Obfuscator = require('./obfuscator');

module.exports = function (grunt) {

    grunt.registerMultiTask('obfuscate', 'obfuscate JS', function () {
        const done = this.async();
        const {obfuscateOptions, src, dest} = this.data;

        const fileCode = grunt.file.read(src);

        const onError = (err) => {
            grunt.fatal(err);
            done(err);
        };

        const onSuccess = (obfuscated) => {
            grunt.file.write(dest, obfuscated);
            done();
        };

        const obfuscator = new Obfuscator();
        obfuscator.obfuscate(src, fileCode, obfuscateOptions, onError, onSuccess);
    });

};
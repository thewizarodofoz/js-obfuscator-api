module.exports = function (grunt) {

    require('../lib/index')(grunt);

    grunt.initConfig({

        obfuscate: {
            dist: {
                src: 'mock.js',
                dest: 'out.js',
                obfuscateOptions: {
                    APIKey: process.env.API_KEY,
                    APIPwd: process.env.API_PWD
                }
            }
        }
    });

    grunt.registerTask('test', ['obfuscate:dist']);

};
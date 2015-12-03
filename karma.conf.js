'use strict';

module.exports = function(config) {
    config.set({
        basePath: __dirname,
        frameworks: [
            'mocha',
            'chai'
        ],
        browsers: [
            'Firefox'
        ],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'angular-promiseify.js',
            'test/cases.js'
        ],
        logLevel: config.LOG_INFO,
        colors: true,
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-firefox-launcher'
        ],
        singleRun: true
    });
};

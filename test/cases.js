'use strict';

describe('Testing angular-promiseify', function() {

    beforeEach(module('angular-promiseify'));

    it('factory is created', inject(function(promiseify) {
        expect(promiseify).not.to.equal(null);
    }));

    it('callback is called with correct data', inject(function(promiseify, $rootScope, $timeout) {

        var readFile = function(path, options, cb) {
            $timeout(function() {
                cb(undefined, 'hello');
            }, 10);
        };

        var result;
        var read = promiseify(readFile);
        read('/hellotxt.file', 'utf-8')
            .then(function(data) {
                result = data;
            });
        $timeout.flush(11);
        expect(result).to.equal('hello');
    }));

    it('callback is called with error', inject(function(promiseify, $rootScope, $timeout) {

        var readFile = function(path, options, cb) {
            $timeout(function() {
                cb(new Error('error'));
            }, 10);
        };

        var result,
            correct = false;
        var read = promiseify(readFile);
        read('/hellotxt.file', 'utf-8')
            .then(function() {
                correct = true;
            })
            .catch(function(err) {
                result = err;
            });
        $timeout.flush(11);
        expect(correct).to.be.false;
        expect(result).to.be.an.instanceof(Error);
    }));

    it('error with file execution', inject(function(promiseify, $rootScope, $timeout) {

        var readFile = function(path, options, cb) {
            throw new Error('err');
        };

        var result,
            correct = false;
        var read = promiseify(readFile);
        read('/hellotxt.file', 'utf-8')
            .then(function() {
                correct = true;
            })
            .catch(function(err) {
                result = err;
            });
        $timeout.flush(11);
        expect(correct).to.be.false;
        expect(result).to.be.an.instanceof(Error);
    }));

});

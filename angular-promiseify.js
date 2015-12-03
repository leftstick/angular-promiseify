/**
 *
 *  @author Howard.Zuo
 *  @date   Dec 3, 2015
 *
 **/
(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'));
    } else {
        // Browser globals
        factory(root.angular);
    }
}(this, function(ng) {

    var slice = Array.prototype.slice;

    var name = 'angular-promiseify';

    var mod = ng.module(name, []);


    var Promiseify = function($q) {

        return function(func) {

            return function() {
                var ctx = this;
                var parameters = slice.apply(arguments);

                return $q(function(resolve, reject) {

                    var cb = function(err) {
                        if (err) {
                            return reject(err);
                        }
                        var callbackData = slice.apply(arguments);
                        if (callbackData.length === 2) {
                            return resolve.call(this, callbackData[1]);
                        }
                        return resolve.call(this, callbackData.slice(1));
                    };

                    try {
                        func.apply(ctx, parameters.concat([cb]));
                    } catch (e) {
                        return reject(e);
                    }

                });
            };
        };
    };

    Promiseify.$inject = ['$q'];

    mod.factory('promiseify', Promiseify);

    return name;
}));

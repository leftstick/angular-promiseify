angular-promiseify
=====================
![][bower-url]
[![NPM version][npm-image]][npm-url]
![][david-url]
![][travis-url]
![][dt-url]

Turn regular callback-based function into $q promise

## Installation ##

### From bower ###

```javascript
bower install angular-promiseify
```

### From npm ###

```javascript
npm install angular-promiseify
```

## Usage ##

```html
<script type="text/javascript" src="node_modules/angular/angular.min.js"></script>
<script type="text/javascript" src="node_modules/angular-promiseify/angular-promiseify.min.js"></script>
```

```javascript
'use strict';
var mod = angular.module('demo', ['angular-promiseify']);

mod.controller('TestCtrl', function($scope, promiseify){

    var testFunc = function(arg1, arg2, callback){
        $timeout(function(){
            callback('ok');
        }, 300);
    };

    var test = promiseify(testFunc);
    test('a', 'b')
    .then(function(data){
        console.log(data);//here "ok" will be printed
    });

});
```



## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/angular-promiseify/master/LICENSE)



[bower-url]: https://img.shields.io/bower/v/angular-promiseify.svg
[npm-url]: https://npmjs.org/package/angular-promiseify
[npm-image]: https://badge.fury.io/js/angular-promiseify.png
[david-url]: https://david-dm.org/leftstick/angular-promiseify.png
[travis-url]:https://api.travis-ci.org/leftstick/angular-promiseify.svg?branch=master
[dt-url]:https://img.shields.io/npm/dt/angular-promiseify.svg

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.lazymap = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

module.exports = currify;

var tail = function tail(list) {
    return [].slice.call(list, 1);
};

function currify(fn) {
    check(fn);

    var args = tail(arguments);

    if (args.length >= fn.length) return fn.apply(undefined, _toConsumableArray(args));else return function () {
        return currify.apply(undefined, [fn].concat(_toConsumableArray(args), Array.prototype.slice.call(arguments)));
    };
}

function check(fn) {
    if (typeof fn !== 'function') throw Error('fn should be function!');
}
},{}],"lazymap":[function(require,module,exports){
'use strict';

var _marked = [lazy].map(regeneratorRuntime.mark);

var currify = require('currify');

module.exports = currify(function (fn, array) {
    check(fn, array);

    var la = lazy(fn, array);

    return currify(take, la);
});

function check(fn, array) {
    if (typeof fn !== 'function') throw Error('fn should be a function!');

    if (!Array.isArray(array)) throw Error('array should be an array!');
}

function lazy(fn, array) {
    var n, i;
    return regeneratorRuntime.wrap(function lazy$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    n = array.length;
                    i = n + 1;

                case 2:
                    if (! --i) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 5;
                    return fn(array[n - i]);

                case 5:
                    _context.next = 2;
                    break;

                case 7:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function take(gen, count) {
    var array = [];

    if (count) ++count;

    while (--count) {
        var _gen$next = gen.next();

        var done = _gen$next.done;
        var value = _gen$next.value;


        if (done) break;

        array.push(value);
    }

    return array;
}
},{"currify":1}]},{},["lazymap"])("lazymap")
});
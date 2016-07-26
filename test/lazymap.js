'use strict';

const test = require('tape');
const lazymap = require('..');

test('lazymap: curry: no fn', (t) => {
    t.equal(typeof lazymap(), 'function', 'should use curry when no fn');
    t.end();
});

test('lazymap: curry: no array', (t) => {
    t.equal(typeof lazymap(a => a), 'function', 'should use curry when no array');
    t.end();
});

test('lazymap: fn is none', (t) => {
    const fn = () => lazymap(null, null);
    t.throws(fn, /fn should be a function/, 'should throw when no args');
    t.end();
});

test('lazymap: array is none', (t) => {
    const fn = () => lazymap(a => a, null);
    t.throws(fn, /array should be an array/, 'should throw when no array');
    t.end();
});

test('lazymap: curry: result ', (t) => {
    t.equal(typeof lazymap(a => a, []), 'function', 'should return function when fn and array passed in');
    t.end();
});

test('lazymap: take: first', (t) => {
    const inc = a => ++a;
    const take = lazymap(inc, [1, 2, 3]);
    const expect = [2, 3];
    
    t.deepEqual(take(2), expect, 'should return first two processed elements of array');
    t.end();
});

test('lazymap: take: twice', (t) => {
    const inc = a => ++a;
    const take = lazymap(inc, [1, 2, 3]);
    const expect = [4];
    
    take(2);
    
    t.deepEqual(take(1), expect, 'should return two processed elements of array');
    t.end();
});

test('lazymap: take: more', (t) => {
    const inc = a => ++a;
    const take = lazymap(inc, []);
    const expect = [];
    
    t.deepEqual(take(1), expect, 'should return next one processed element of array');
    t.end();
});


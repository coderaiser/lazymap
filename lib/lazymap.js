'use strict';

const currify = require('currify/legacy');

module.exports = currify((fn, array) => {
    check(fn, array);
    
    const la = lazy(fn, array);
    
    return currify(take, la);
});

function check(fn, array) {
    if (typeof fn !== 'function')
        throw Error('fn should be a function!');
    
    if (!Array.isArray(array))
        throw Error('array should be an array!');
}

function* lazy(fn, array) {
    const n = array.length;
    let i = n + 1;
    
    while (--i)
        yield fn(array[n - i]);
}

function take(gen, count) {
    const array = [];
    
    if (count)
        ++count;
    
    while (--count) {
        const {done, value} = gen.next();
        
        if (done)
            break;
        
        array.push(value);
    }
    
    return array;
}


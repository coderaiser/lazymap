# Lazymap [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Lazy evaluate array processing, do only what you need.

## Install

```sh
npm i lazymap -S
```

## Example

```js
const lazy = require('lazy');
const squad = require('squad');

const fn = squad.apply(...[
    a => `hello ${a}`,
    a => String(a),
    a => ++a,
    a => a * a
]);

const take = lazy(fn, [1, 2, 3, 4, 5]);

take(2);
// returns
[ 'hello 2', 'hello 5']
```

## Environments

### Node.js

In old `node.js` environments that supports `es5` only, `lazymap` could be used with:

```js
var lazymap = require('lazymap/legacy');
```

### Web Browser

`lazymap` could be installed via `bower` with:

```sh
bower install lazymap --save
```

When loaded in browser `lazymap` uses global variable with same name (when `browserify` or `webpack` did not used).

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/longrun.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/lazymap/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/lazymap.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/lazymap "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/lazymap  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/lazymap "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/lazymap?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/lazymap/badge.svg?branch=master&service=github


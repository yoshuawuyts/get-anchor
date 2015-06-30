# get-anchor
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Get an anchor by `href` and optional
[`query`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

## Installation
```bash
$ npm install get-anchor
```

## Usage
```js
const getAnchor = require('get-anchor')

// create an anchor on the DOM
const anchorEl = document.createElement('a')
anchorEl.setAttribute('href', '#oh-my-element')
document.body.appendChild(anchorEl)

getAnchor('oh-my-element')
// => <a href="#oh-my-element"></a>
```

## API
### getAnchor(href [, query])
Get an anchor by `href` and optional
[`query`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).
Returns the first match.

## See Also
- [scroll-to-element](https://www.npmjs.com/package/scroll-to-element)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/get-anchor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/get-anchor
[travis-image]: https://img.shields.io/travis/yoshuawuyts/get-anchor/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/get-anchor
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/get-anchor.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/get-anchor?branch=master
[downloads-image]: http://img.shields.io/npm/dm/get-anchor.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/get-anchor
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

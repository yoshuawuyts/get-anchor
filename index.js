const assert = require('assert')

module.exports = getAnchor

// find an anchor by href
// and optional query
// (str, str) -> DOMNode|Null
function getAnchor (href, query) {
  assert.ok(href)
  href = href.replace(/^\//, '').replace(/^#/, '')

  const selector = query
    ? query + '[href="#' + href + '"]'
    : '[href="#' + href + '"]'

  return document.querySelector(selector)
}

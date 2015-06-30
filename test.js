const jsdom = require('jsdom').jsdom
const test = require('tape')
const getAnchor = require('./')

test('should assert input values', function (t) {
  t.plan(1)
  t.throws(getAnchor)
})

test('finds anchors', function (t) {
  t.plan(2)
  const document = global.document = jsdom()
  document.window = document.defaultView

  const anchorEl = document.createElement('a')
  anchorEl.setAttribute('href', '#oh-my-element')
  document.body.appendChild(anchorEl)

  const el = getAnchor('oh-my-element')
  t.ok(!Array.isArray(el), 'not an array')
  t.equal(el.getAttribute('href'), '#oh-my-element')
})

test('removes leading slashes', function (t) {
  t.plan(1)
  const document = global.document = jsdom()
  document.window = document.defaultView

  const anchorEl = document.createElement('a')
  anchorEl.setAttribute('href', '#oh-my-element')
  document.body.appendChild(anchorEl)

  const el = getAnchor('/oh-my-element')
  t.equal(el.getAttribute('href'), '#oh-my-element')
})

test('takes an optional query argument', function (t) {
  t.plan(2)
  const document = global.document = jsdom()
  document.window = document.defaultView

  const anchorEl = document.createElement('a')
  anchorEl.setAttribute('href', '#oh-my-element')
  anchorEl.setAttribute('class', 'hi')
  document.body.appendChild(anchorEl)

  const el = getAnchor('/oh-my-element', '.hi')
  t.equal(el.getAttribute('href'), '#oh-my-element')
  t.equal(el.getAttribute('class'), 'hi')
})

'use strict'

const test = require('tape')
const randomKey = require('./index')

test('should pick a random key from object', function(t) {

  const obj = {"a": 1, "b": "two", "c": 3, "d": 4}
  const keys = Object.keys(obj)

  t.plan(1)
  // returns true if actual result is in objVals
  t.equal(true, keys.indexOf(randomKey(obj)) > -1, "test 1")
  t.end()
})

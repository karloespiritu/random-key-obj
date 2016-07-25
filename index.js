'use strict'

module.exports = function (obj) {
  const keys = Object.keys(obj)

  return keys[keys.length * Math.random() << 0]
}

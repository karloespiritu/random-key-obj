# random-key-obj [![Build Status](https://travis-ci.org/karloespiritu/random-key-obj.svg?branch=master)](https://travis-ci.org/karloespiritu/random-key-obj)

Pick a random key from an object

## Install

```js
npm install --save random-key-obj
```

## Usage

```js
const randomKey = require('random-key-obj')
const obj = {a: 1, b: 'two', c: 3, d: 4}

randomKey(obj)
// => b

randomKey(obj)
// => d

```
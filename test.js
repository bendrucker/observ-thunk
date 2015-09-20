'use strict'

var test = require('tape')
var Observ = require('observ')
var watch = require('observ/watch')
var Thunk = require('./')

test(function (t) {
  t.plan(2)
  var observable = Observ(1)

  var i = 0
  watch(observable, Thunk(function (value) {
    if (!i++) return t.equal(value, 1)
    t.equal(value, 2)
  }))

  // noops
  observable.set(1)
  observable.set(1)
  observable.set(1)

  // runs
  observable.set(2)
})

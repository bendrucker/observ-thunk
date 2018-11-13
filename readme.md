# observ-thunk [![Build Status](https://travis-ci.org/bendrucker/observ-thunk.svg?branch=master)](https://travis-ci.org/bendrucker/observ-thunk) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/observ-thunk.svg)](https://greenkeeper.io/)

> Wrap a listener function to prevent multiple calls for identical values


## Install

```
$ npm install --save observ-thunk
```


## Usage

```js
var ObservThunk = require('observ-thunk')
var Observ = require('observ')
var observable = Observ()

observable(ObservThunk(function (value) {
  console.log(value)  
}))

observable.set(1)
observable.set(1)
observable.set(1)

//=> 1 (printed only once)
```

## API

#### `ObservThunk(fn)` -> `function`

##### fn

*Required*  
Type: `function`

A function to run when the obserable's value is not strictly equal to the previous call.


## License

MIT © [Ben Drucker](http://bendrucker.me)

Serial & Parallel Async [Map](http://en.wikipedia.org/wiki/Map_\(higher-order_function\)). Iterates arrays and objects.

## Install
```
$ npm install map
```

## Usage

```js
map = require('map')
keywords = ['foo', 'bar']

map(search, keywords, function (error, results) {

  results
  // [results for foo, results for bar]

});
```

Parallel:

```js
map.parallel(search, keywords, function (error, results) {

})
```

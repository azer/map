Async [Map](http://en.wikipedia.org/wiki/Map_\(higher-order_function\)). Iterates arrays and objects.

## Install
```
$ npm install map
```

## Usage
```js
var keywords = ['foo', 'bar'];

map(search, keywords, function(error, results){
  error.should.not.exist();
  results.should.have.length(2);
});
```

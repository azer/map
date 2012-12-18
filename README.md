Async [Map](http://en.wikipedia.org/wiki/Map_(higher-order_function)). Iterates arrays or objects.

## Install
```
$ npm install map
```

## Usage
```
var keywords = ['foo', 'bar'],
    people = { lennon: "John Lennon", best: "George Best" };

map(searchGoogle, keywords, function(error, results){
  error.should.not.exist();
  results.should.have.length(2);
});

map(searchGoogle, people, function(error, results){
  error.should.not.exist();
  results.should.contain('lennon');
  results.should.contain('best');
});
```

Since iterables aren't first parameters, new functions can be created from map;

```
searchGoogle = map.bind(null, searchGoogle);

searchGoogle(['hello', 'kitty'], function(){}); // or
```

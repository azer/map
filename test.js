var map    = require('./map'),
    assert = require('assert');

it('iterates arrays', function(done){
  var range = [3,1,4];

  function fn(el,callback){ callback(undefined, el*el); }

  map(fn, range, function(error, seq){

    if(error){
      throw error;
    }

    assert.equal(range[0], 3);
    assert.equal(range[1], 1);
    assert.equal(range[2], 4);

    assert.equal(seq[0], 9);
    assert.equal(seq[1], 1);
    assert.equal(seq[2], 16);

    done();

  });

});

it('stops iteration when an error is returned', function(done){
  function fn(_,callback){
    callback(new Error('foobar'),9);
  }

  map(fn, [3, 1, 4], function(error, list){
    assert.deepEqual(list, []);
    done();
  });
});

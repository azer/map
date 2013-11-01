var map    = require('./');

describe('serial', function(){

  it('creates a new array by iterating the array with given async function', function(done){
    var range = [3,1,4];

    map(fn, range, function(error, seq){
      if(error){
        throw error;
      }

      expect(range[0]).to.equal(3);
      expect(range[1]).to.equal(1);
      expect(range[2]).to.equal(4);
      expect(seq[0]).to.equal(9);
      expect(seq[1]).to.equal(1);
      expect(seq[2]).to.equal(16);

      done();
    });

    function fn(el,callback){ callback(undefined, el*el); }
  });

  it('stops iteration when an error is returned', function(done){
    map(fn, [3, 1, 4], function(error, list){
      expect(error).to.exist;
      done();
    });

    function fn (el,callback){
      expect(el).to.equal(3);
      callback(new Error('foobar'), 9);
    }
  });

});

describe('parallel', function(){

  it('creates a new array by itereating the given async function paralelly ', function(done){
    map.parallel(fn, [3, 1, 4, 1], function (error, list) {
      if (error) return done(error);
      expect(list).to.deep.equal([9, 1, 16, 1]);
      done();
    });

    var i = 0;

    function fn(el,callback){
      setTimeout(function () {
        callback(undefined, el*el);
      }, (4 - i) * 200);
    }
  });

  it('stops iteration when an error is returned', function(done){
    map(fn, [3, 1, 4], function(error, list){
      expect(error).to.exist;
      done();
    });

    function fn (el,callback){
      expect(el).to.equal(3);
      callback(new Error('foobar'), 9);
    }
  });


});

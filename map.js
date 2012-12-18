module.exports = map;

/**
 * Apply async function to every item of iterable, receiving a callback function which takes error (if there is) and replacement parameters.
 *
 * @param {Function} fn
 * @param {Array, Object} iterable
 * @param {Function} callback
 */
function map(fn, iterable, callback){
  var clone, iter, i, len, key, value,
      list = isArray(iterable);

  iter = list ? Array.prototype.slice.call(iterable) : objectKeys(iterable);
  clone = list ? iter : {};

  (function next(i, error, rpl){

    key = list ? i-1 : iter[i-1];
    value = list ? clone[i] : iterable[ iter[i] ];

    arguments.length > 2 && ( clone[key] = rpl );

    if(error || i>=iter.length){
      callback(error, clone);
      return;
    }

    fn(value, next.bind(undefined, i+1));

  })(0);
};

function objectKeys(obj){
  var keys = [], key;
  for(key in obj){
    keys.push( key );
  }
  return keys;
}

function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
}

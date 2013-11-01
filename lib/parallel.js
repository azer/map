module.exports = parallel;

function newCallback(id, mem, array, results, callback){
  return function(error, result){
    if(mem.ret || ~mem.indexOf(id)) return;

    if(error) {
      mem.ret = true;
      callback(error, results);
      return;
    }

    results[id] = result;
    mem.push(id);

    if(mem.length == array.length) callback(undefined, results);

  };
}

function parallel(fn, array, callback){
  var result = [],
      mem    = [],
      i      = array.length;

  while( i-- ) {
    fn(array[i], newCallback(i, mem, array, result, callback));
  }

}

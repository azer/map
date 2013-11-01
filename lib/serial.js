module.exports = serial;

function serial (fn, array, callback) {
  var result = [];

  (function next (i) {
    if (i >= array.length) {
      return callback(undefined, result);
    }

    fn(array[i], function (error, repl) {
      if (error) {
        return callback(error);
      }

      result.push(repl);

      next(i+1);
    });

  }(0));
}

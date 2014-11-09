module.exports = function sum() {
  var numsArr = [].slice.call(arguments);

  return numsArr.reduce(function(current, next) {
    return current + next;
  }, 0);
};
module.exports = function sum() {
  var numsArr = [].slice.call(arguments);

  return numsArr.reduce(function(current, next){
    if(typeof next !== number && isNaN(next)){
      return new TypeError('Expected arguments to numbers but ' + next + 'is not!');
    }
    return current + next;
  }, 0);
};

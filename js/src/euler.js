//Solution 1
//Multiples of 3 and 5

var multiples = function(number) {
  var array = _.range(number);
  return _(array).chain()
          .filter(function(num) {
            return ((num % 3 === 0) || (num % 5 === 0));
          })
          .reduce(function(memo, num) { return memo + num; })
          .value();
}

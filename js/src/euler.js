//Solution 2
//Even Fibs added up
var evenFibs = function(number) {
  var fibs = [];

  //Traditional Fibonacci Sequence Generator
  for(var i = 1, memo = 0; i < number;){
    fibs.push(i);
    i = memo + i;
    memo = i - memo;
  }

  return _(fibs).chain()
          .filter(function(num) { return (num % 2 === 0); })
          .reduce(function(memo, num) { return memo + num; })
          .value();
            
}

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

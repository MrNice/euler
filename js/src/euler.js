//Solution 3
//Largest Prime Factor
//FIRST, SLOW ATTEMPT
var generatePrimes = function(max) {
  var range = _.range(2, Math.sqrt(max));
  var primes = [];
  var largest = 0;
  while(range.length > 1) {
    var testnum = range.shift();
    primes.push(testnum);
    range = _(range).reject(function(x) {
      return x % testnum === 0;
    });
  }
  return primes;
}
  
var largestPrimeFactor = function(number) {
  var primes = generatePrimes(number).reverse();
  
  return _(primes).find(function(num) {
    return number % num === 0;
  });
}

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

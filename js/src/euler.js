//Solution 3
//Largest Prime Factor
//FIRST, SLOW ATTEMPT
var generatePrimes = function(max) {
  //TODO: test this function
  var range = _.range(3, max, 2);
  var primes = [2];
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
//Second attempt
largestPrimeFactor = function(number) {
  var primes = generatePrimes(10000);
  var i;

  var removePrimes = function(bignum){
    i = primes.shift();
    if(bignum === i) {
      return i;
    } else if(bignum % i === 0){
      console.log('Factor found: ' + i.toString());
      primes.unshift(i);
      return removePrimes(bignum / i);
    } else {
      return removePrimes(bignum);
    } 
  }
  
  return removePrimes(number);
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

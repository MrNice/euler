//Euler spec
describe('Largest prime factor', function() {
  it('Should find the largest prime factor', function() {
    expect(largestPrimeFactor(13195)).to.be(29);
    //expect(largestPrimeFactor(600851475143)).to.be(29);
  });
});

describe('Even Fibonacci numbers', function() {
  it('Should find the sum of even fibonacci numbers under a value', function(){
    expect(evenFibs(10)).to.be(10);
    console.log(evenFibs(4000000));
  });
});

describe('Sum of Multiples of 3 and 5', function() {
  it('Should sum the mutliples of 3 and 5 under a value', function(){
    expect(multiples(10)).to.eql(23);
    console.log(multiples(1000));
  });  
});




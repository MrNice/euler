//Euler spec
describe('Sum of Multiples of 3 and 5', function() {
  it('Should sum the mutliples of 3 and 5 under a value', function(){
    expect(multiples(10)).to.eql(23);
    expect(multiples(1000)).to.eql(233168);
  });  
});

describe('Even Fibonacci numbers', function() {
  it('Should find the sum of even fibonacci numbers under a value', function(){
    expect(evenFibs(10)).to.be(10);
    expect(evenFibs(4000000)).to.be(4613732);
  });
});

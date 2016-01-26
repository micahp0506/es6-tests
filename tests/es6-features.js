var expect = require('chai').expect;


describe('destructuring & block scope', function () {
  'use strict'
  
  it('extracts data from an array', function() {
    var [a,b,c] = [1, 2, 3];

    expect(b).to.equal(2);
   });

  it('extracts data from an object', function() {
    var o = {p: 42, q: true};
    var {p, q} = o;

    expect(p).to.equal(42);
    expect(q).to.equal(true);
  });

  it('declares a block scope local variable', function() {
    //'use strict'
    let foo = "bar";

    expect(foo).to.equal("bar");
  });

  it('declares a block scope local variable', function() {
    //'use strict'
    let x =2;

    expect(x).to.equal(2);
  });
});

var expect = require('chai').expect;

describe('arrow functions', function() {
  "use strict"
  it('is shorter to write', function() {
    var fn = () => {
     return 'Hello World'
    };

    expect(fn()).to.equal('Hello World');
  });

  it('one parameters can be written without parens', function() {
    var fn = name => {
    return `Hello ${name}`;
    };
    
    expect(fn('Micah')).to.equal('Hello Micah');
  });

  it('binds "this" to the fiunction', function(done) {
    this.foo = 'bar';
    
    var fn =() => {
      return this.foo;
    };
    done();
   });
});

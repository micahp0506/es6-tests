
var expect = require('chai').expect;

describe('template strings', function () {
  it('should be a string', function () {
    var string = `abc`;

    expect(string).to.be.a('string');
  });

  it('can evaluate variables', function () {
    var bar = `baz`;
    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });

  it('can execute functions', function () {
    var string = `The date is: ${new Date()}`
    var date = new Date();

    expect(string).to.equal('The date is: ' + date);
  });

  it('can evaluate expressions', function () {
    var string = `The answer is: ${1+2}`
    var answer = 3;

    expect(string).to.equal('The answer is: ' + answer);
  });

  it('can evaluate multiline strings', function () {
    var string = `Hello
World`;
    expect(string).to.equal('Hello\n'+'World');
  });


 });



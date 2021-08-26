const chai = require('chai');

//expect
const expect = chai.expect;

//should
const should = chai.should();

//assert
const assert = chai.assert;

//expect API examples
let a =1, b = 1;
expect(a).to.be.equals(b, "a and b are not equal");
a.should.be.equals(b);
assert.equal(a, b);

//object/string/boolean

function myObj() {
    return{
        a: 100,
        b: 'Hello'
    }
}

x = new myObj(), y = new myObj();
expect(x).to.be.an('object');

//Compare object content using deeep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and y are equal');
(x).should.be.deep.equals(y);
assert.deepEqual(x, y);

//Chain expressions put different asserts together
// x is an object; x and y are equal
expect(x).to.be.an('object').and.to.be.deep.equals(y);
(x).should.be.an('object').and.to.be.deep.equals(y);

//arrays
// validate that 'numbers' is and array and contains 4
let numbers = [1, 2, 3, 4];
expect(numbers).to.be.an('array').that.includes(4);
(numbers).should.be.an('array').that.includes(4);
assert.isArray(numbers);
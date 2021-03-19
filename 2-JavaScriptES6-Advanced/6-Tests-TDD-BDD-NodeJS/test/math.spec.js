
const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();

        assert.equal(math.sum(5,5), 10);
    });
});
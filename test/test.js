const removeFirst = require('../remove-first');
const assert = require('chai').assert;
describe('Remove First Element Of An Array',function(){
    it('Function Shuld Return First Element Of An Array',function(){
        assert.equal(removeFirst([1,-2,-1,-5]),1);
        assert.equal(removeFirst([1]),1);
        assert.equal(removeFirst([1,-2,-1,{}]),1);
        assert.equal(removeFirst([1,-2,-1,[]]),1);
        assert.equal(removeFirst([]),null);
    });
});
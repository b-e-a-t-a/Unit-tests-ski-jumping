const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe.only('calculateStylePoints', () => {
    it('should return 55', () => {
        const actual = calculateStylePoints([18, 18.5, 17.5, 18.5, 18.5]);
    
        const expected = '55';
    
        assert.equal(actual, expected);
    });

    it('should return 57', () => {
        const actual = calculateStylePoints([19, 19.5, 19, 19, 19]);
    
        const expected = '57';
    
        assert.equal(actual, expected);
    });

    it('should return 57.5', () => {
        const actual = calculateStylePoints([19, 20, 19.5, 19, 18.5]);
    
        const expected = '57.5';
    
        assert.equal(actual, expected);
    });
});
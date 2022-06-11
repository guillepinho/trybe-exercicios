const sum = require('./sum');

describe('The function sum', () => {
    it('Expect the sum of 4 and 5 to be 9', () => {
        expect(sum(4, 5)).toBe(9);
    }),
    it('Expect the sum of 0 and 0 to be 0', () => {
        expect(sum(0, 0)).toBe(0);
    }),
    it('Expect the sum of 4 and "5" to throw an error', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    })
})
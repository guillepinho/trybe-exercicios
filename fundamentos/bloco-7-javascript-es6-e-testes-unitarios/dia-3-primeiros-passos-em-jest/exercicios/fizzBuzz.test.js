const fizzBuzz = require('./fizzBuzz');

describe('Function fizzbuzz', () => {
    it('Expect fizzbuzz when given 15', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    }),
    it('Expect fizz when given 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    }),
    it('Expect buzz when given 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    }),
    it('Expect same number returned when given 7', () => {
        expect(fizzBuzz(7)).toBe(7);
    }),
    it('Expect to be false when given NaN', () => {
        expect(fizzBuzz('15')).toBe(false);
    })
})
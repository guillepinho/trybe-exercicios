const { encode, decode } = require('./encode');

describe('Encode func', () => {
    it('Se entregar "aeiou", deve devolver "12345"', () => {
        expect(encode('aeiou')).toEqual('12345');
    }),
    it('Se entregar "hello there", deve devolver "h2ll4 th2r2"', () => {
        expect(encode('hello there')).toEqual('h2ll4 th2r2');
    }),
    it('Se entregar "hello there", deve devolver uma outra string com 11 caracteres', () => {
        expect(encode('hello there')).toHaveLength(11);
    })
})

describe('Decode func', () => {
    it('Se entregar "12345", deve devolver "aeiou"', () => {
        expect(decode('12345')).toEqual('aeiou');
    }),
    it('Se entregar "h2ll4 th2r2", deve devolver "hello there"', () => {
        expect(decode('h2ll4 th2r2')).toEqual('hello there');
    }),
    it('Se entregar "h2ll4 th2r2", deve devolver uma outra string com 11 caracteres', () => {
        expect(decode('h2ll4 th2r2')).toHaveLength(11);
    })
})
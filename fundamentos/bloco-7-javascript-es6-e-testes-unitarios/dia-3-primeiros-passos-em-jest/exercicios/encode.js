function encode(string) {
    let code = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
    };
    let encoded = string.split('');
    for (let i = 0; i < encoded.length; i += 1) {
        if (encoded[i] in code === true) {
            encoded[i] = code[encoded[i]];
        }
    }
    encoded = encoded.join('');
    return encoded;
}

function decode(string) {
    let code = {
        1: 'a',
        2: 'e',
        3: 'i',
        4: 'o',
        5: 'u',
    };
    let decoded = string.split('');
    for (let i = 0; i < decoded.length; i += 1) {
        if (decoded[i] in code === true) {
            decoded[i] = code[decoded[i]];
        }
    }
    decoded = decoded.join('');
    return decoded;
}

module.exports = { encode, decode };
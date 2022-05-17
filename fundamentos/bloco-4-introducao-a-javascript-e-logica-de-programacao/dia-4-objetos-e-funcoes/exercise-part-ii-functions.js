// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function palindromo(string) {
    string = string.toLowerCase();
    let stringRev = string.split('').reverse().join('');
    // stringRev = stringRev.reverse();
    // stringRev = stringRev.join('');
    // console.log(stringRev);
    if (string === stringRev) {
        console.log(true);
    } else {
        console.log(false);
    }
}

palindromo('arara');
palindromo('desenvolvimento');

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function biggerIndex(array) {
    let bigger = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (bigger < array[i]) {
            bigger = array[i];
            index = i;
        }
    }
    console.log(index);
}

biggerIndex([2, 3, 6, 7, 10, 1]);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function smallerIndex(array) {
    let smaller = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (smaller > array[i]) {
            smaller = array[i];
            index = i;
        }
    }
    console.log(index);
}

smallerIndex([2, 4, 6, 7, 10, 0, -3]);

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggerString(array) {
    let biggerLength = array[0].length;
    let bigger = array[0];
    for (let i = 0; i < array.length; i += 1) {
        if (biggerLength < array[i].length) {
            biggerLength = array[i].length;
            bigger = array[i];
        }
    }
    console.log(bigger);
}

biggerString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function repeater(array) {
    let mostRepeated = array[0];
    let maxCounter = 0;
    for (let index = 0; index < array.length; index += 1) {
        let currentCounter = 0;
        for (let verif = 0; verif < array.length; verif += 1) {
            if (array[index] === array[verif]) {
                currentCounter += 1;
            }
        }
        if (currentCounter >= maxCounter) {
            maxCounter = currentCounter;
            mostRepeated = array[index];
        } 
    }
    console.log(mostRepeated);
}

repeater([2, 3, 2, 5, 8, 2, 3]);

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function sum(num) {
    let sum = 0;
    if (num < 1) {
        console.log('error');
    }
    else {
        for (let i = 1; i <= num; i += 1) {
            sum += i;
        }
    }
    console.log(sum);
}

sum(5);


// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
function verifyEnd(string, stringEnd) {
    if (stringEnd.length > string) {
        console.log('error');
    } else {
        string = string.split('');
        stringEnd = stringEnd.split('');
        let shifter = stringEnd.length - (stringEnd.length * 2);
        let stringVerify = string.slice(shifter);
        stringEnd = stringEnd.join('');
        stringVerify = stringVerify.join('');
        if (stringEnd === stringVerify) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

verifyEnd('trybe', 'be');
verifyEnd('joaofernando', 'fernan');
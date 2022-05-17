const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

function roman(romanNumber) {
    if (typeof romanNumber !== 'string') {
        console.log('error');
    } else {
        let number = 0;
        romanNumber = romanNumber.toUpperCase();
        for (let i = 0; i < romanNumber.length; i += 1) {
            if (romanNumber[i] === 'I' && romanNumber[i + 1] === 'V') {
                number += 4;
                i += 1;
            }
            else if (romanNumber[i] === 'I' && romanNumber[i + 1] === 'X') {
                number += 9;
                i += 1;
            }
            else if (romanNumber[i] === 'X' && romanNumber[i + 1] === 'L') {
                number += 40;
                i += 1;
            }
            else if (romanNumber[i] === 'X' && romanNumber[i + 1] === 'C') {
                number += 90;
                i += 1;
            }
            else if (romanNumber[i] === 'C' && romanNumber[i + 1] === 'D') {
                number += 400;
                i += 1;
            }
            else if (romanNumber[i] === 'C' && romanNumber[i + 1] === 'M') {
                number += 900;
                i += 1;
            }
            else {
                number += romanNumbers[romanNumber[i]]
            }
        }
        console.log(number);
    }
}

roman('mcmlxxxix');

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
function arrayOfNumbers(array) {
    let evens = [];
    for (let index of array) {
        for (let i = 0; i < index.length; i += 1) {
            if (index[i] % 2 === 0) {
                evens.push(index[i]);
            }
        }
    }
    console.log(evens);
}

arrayOfNumbers(vector);

// 🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

function basketCounter(check) {
    let basketFinal = {};
    check.forEach(fruit => {
        basketFinal[fruit] = (basketFinal[fruit] || 0) + 1;
    })
    console.log(basketFinal);
}

basketCounter(basket);

//4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".
//5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.
let moradores = {
    blocoUm: [
        {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};

let ultimoMoradorBloco2 = moradores.blocoDois[moradores.blocoDois.length - 1];

console.log(`O morador do bloco 2 de nome ${ultimoMoradorBloco2.nome} ${ultimoMoradorBloco2.sobrenome} mora no ${ultimoMoradorBloco2.andar}º andar, apartamento ${ultimoMoradorBloco2.apartamento}.`)

for (let key of moradores.blocoUm) {
    console.log(key.nome, key.sobrenome);
}

for (let key of moradores.blocoDois) {
    console.log(key.nome, key.sobrenome);
}
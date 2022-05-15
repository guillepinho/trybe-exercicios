// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
let factorial = 1;

for (let i = 10; i >= 1; i -= 1) {
    factorial = factorial * i;
}
console.log(factorial);


// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'banana';
let reverse = [];

for (let i = (word.length - 1); i >= 0; i -= 1) {
    reverse.push(word[i]);
}

console.log(reverse.join(''));


// 3- Considere o array de strings abaixo, Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];

let bigger = array[0];
let smaller = array[0];

for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > bigger.length) {
        bigger = array[i];
    } else if (array[i].length < smaller.length) {
        smaller = array[i]
    }
}

console.log(bigger);
console.log(smaller);


// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let primo = 2;
let divContador = 0;

for (let numero = 3; numero <= 50; numero += 1) {
    divContador = 0;
    for (let divisor = 2; divisor < numero; divisor += 1) {
        if (numero % divisor === 0) {
            divContador += 1;
        }
    }
    if (divContador === 0) {
        primo = numero;
    }
}

console.log(primo);
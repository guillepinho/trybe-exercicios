let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers) {
    console.log(number);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let average = sum / (numbers.length);
console.log(average);


// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (average > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let bigger = numbers[1];
for (let number of numbers) {
    if (number > bigger) {
        bigger = number;
    }
}
console.log(bigger);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let odds = [];
for (let number of numbers) {
    if (number % 2 !== 0) {
        odds.push(number);
    }
}
console.log(odds);

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let smaller = numbers[1];
for (let number of numbers) {
    if (number < smaller) {
        smaller = number;
    }
}
console.log(smaller);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array25 = [];
for (let i = 1; i <= 25; i += 1) {
    array25.push(i);
}
console.log(array25);


// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let number of numbers) {
    console.log(number / 2);
}

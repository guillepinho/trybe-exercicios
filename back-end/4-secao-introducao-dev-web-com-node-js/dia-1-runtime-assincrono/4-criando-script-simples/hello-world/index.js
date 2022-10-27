const readline = require('readline-sync');

const name = readline.question('Digite seu nome completo:');
const age = readline.questionInt('Qual sua idade?');

console.log(`Hello ${name}, então você tem ${age} anos!`);
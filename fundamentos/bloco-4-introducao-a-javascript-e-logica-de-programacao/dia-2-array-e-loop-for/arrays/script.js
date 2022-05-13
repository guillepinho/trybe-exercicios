let pizzas = ['4 Queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

pizzas.push('Peito de Peru')
pizzas.push('Gratinada')

console.log(pizzas.length);

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}

pizzas.pop();
pizzas.shift();

console.log(pizzas);

let indexOfPizzas = pizzas.indexOf('Peito de Peru');
let newIndexOfPizzas = pizzas.indexOf('Doce de Leite');

console.log(indexOfPizzas);
console.log(newIndexOfPizzas);
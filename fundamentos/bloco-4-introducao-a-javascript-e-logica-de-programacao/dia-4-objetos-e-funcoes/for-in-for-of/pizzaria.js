let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas[key]);
}

for (let key in pizzas) {
    console.log(key, pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let sabor in pizzasDoces) {
    console.log(pizzasDoces[sabor]);
}

for (let sabor of pizzasDoces) {
    console.log(sabor);
}
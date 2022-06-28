// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'melância', 'laranja', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'aveia', 'leite em pó'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
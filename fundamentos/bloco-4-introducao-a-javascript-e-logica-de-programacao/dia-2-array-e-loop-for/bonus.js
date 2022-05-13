let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Ordene o array numbers em ordem crescente e imprima seus valores;
for (let index = 1; index < numbers.length; index += 1) {
    for (let xedni = 0; xedni < numbers.length - index; xedni += 1) {
        if (numbers[xedni] > numbers[xedni + 1]) {
            let aux = numbers[xedni];
            numbers[xedni] = numbers[xedni + 1];
            numbers[xedni + 1] = aux;
        }
    }
}
console.log(numbers);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let index = 1; index < numbers.length; index += 1) {
    for (let xedni = 0; xedni < numbers.length - index; xedni += 1) {
        if (numbers[xedni] < numbers[xedni + 1]) {
            let aux = numbers[xedni];
            numbers[xedni] = numbers[xedni + 1];
            numbers[xedni + 1] = aux;
        }
    }
}
console.log(numbers);

// Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
let numbersEnd = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
for (let i = 0; i < numbersEnd.length; i += 1) {
    if (numbersEnd[i + 1]) {
        array.push(numbersEnd[i] * numbersEnd[i + 1]);
    } else {
        array.push(numbersEnd[i] * 2);
    }
}
console.log(array);
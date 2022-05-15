// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
function pyramid(n) {
    let line = '';
    for (let i = 1; i <= n; i += 1) {
        line += '*';
    }
    for (let i = 1; i <= n; i += 1) {
        console.log(line);
    }
}

pyramid(5);

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
function pyramidBase(n) {
    let line = '';
    for (let i = 1; i <= n; i += 1) {
        line += '*';
        console.log(line);
    }
}

pyramidBase(5);


// 3- Agora inverta o lado do triângulo. Por exemplo:
function pyramidInvert(n) {
    for (let i = n; i > 0; i -= 1) {
        let line = '';
        for (let j = 1; j <= n; j += 1) {
            if (j < i) {
                line += ' ';
            } else {
                line += '*';
            }
        }
        console.log(line);
    }
}

pyramidInvert(5);

// 4- Depois, faça uma pirâmide com n asteriscos de base:
function basePyramid(n) {
    let line = '';
    let meio = Math.ceil(n / 2);
    let esquerdo = meio;
    let direito = meio;

    for (let i = 0; i <= meio; i += 1) {
        for (let j = 0; j <= n; j += 1) {
            if (j > esquerdo && j < direito) {
                line += '*';
            } else {
                line += ' ';
            }
            
        }
        console.log(line);
        line = '';
        esquerdo -= 1;
        direito += 1;
    } 
}

basePyramid(5);

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
function baseVoidPyramid(n) {
    let line = '';
    let meio = Math.ceil(n / 2);
    let esquerdo = meio;
    let direito = meio;

    for (let i = 1; i <= meio; i += 1) {
        line = '';
        for (let j = 1; j <= n; j += 1) {
            if (j == esquerdo || j == direito || i == meio) {
                line += '*';
            } else {
                line += ' ';
            }
        }
        console.log(line);
        esquerdo -= 1;
        direito += 1;
    } 
}

baseVoidPyramid(5);

// 6- Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero. Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
function isItPrime(n) {
    let divCounter = 0;
    
    for (let divisor = 2; divisor < n; divisor += 1) {
        if (n % divisor === 0) {
            divCounter += 1;
        }
    }
    if (divCounter === 0) {
        console.log(`The number ${n} is a prime number.`);
    } else {
        console.log(`The number ${n} is not a prime number.`);
    }
}

isItPrime(8);
isItPrime(47);


// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(array) {
    return array.reduce((acc, cur) => acc.concat(cur), []);
}

console.table(flatten(arrays));

// 

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames(array) {
    return array.reduce((acc, cur, index) => {
        if (index === array.length - 1) {
            return `${acc} ${cur.author.name}.`;
        }
        return `${acc} ${cur.author.name},`;
    }, 'Autores:');
}

console.log(reduceNames(books));

// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge(array) {
    const sumAges = array.reduce((acc, cur) => {
        return (acc + (cur.releaseYear - cur.author.birthYear));
    }, 0);
    return sumAges / array.length;
}

console.log(averageAge(books));

// 4- Encontre o livro com o maior nome.
function longestNamedBook(array) {
    return array.reduce((acc, cur) => {
        return (acc.name.length > cur.name.length) ? acc : cur;
    });
}

console.log(longestNamedBook(books));

// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
    return array.reduce((acc, cur) => {
        return acc + cur.toLowerCase().split('').reduce((letras, letra) => {
            return (letra === 'a') ? letras + 1 : letras;
        }, 0)
    }, 0);
}

console.log(containsA(names));

// 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(array1, array2) {
    return array1.map((aluno, index) => {
        return {
            name: aluno,
            grade: array2[index].reduce((acc, cur) => acc + cur) / array2[index].length,
        };
    });
}

console.log(studentAverage(students, grades));
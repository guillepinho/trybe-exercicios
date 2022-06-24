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

// Código do exercício aqui:
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
console.log(books.find((element) => {
    if (element.author.birthYear === 1947) {
        return element;
    }
}));

// 2 - Retorne o nome do livro de menor nome.
let smaller = books[0];
books.forEach((element) => {
    if (smaller.name.length > element.name.length) {
        smaller = element;
    }
});
console.log(smaller);

// Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
    author: {
        birthYear: 1948,
        name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
};

function getNamedBook(array) {
    return array.find((element) => {
        if (element.name === expectedResult.name) {
            return element;
        }
    })
}

console.log(getNamedBook(books));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const orderedBooks = (array) => {
    return array.sort((a, b) => (a.releaseYear < b.releaseYear) ? 1 : -1);
}

console.log(orderedBooks(books));

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const peopleBornInXX = (array) => {
    return array.every((author) => author.author.birthYear >= 1900 && author.author.birthYear <= 1999);
}

console.log(peopleBornInXX(books));

// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = (array) => {
    return array.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}

console.log(someBookWasReleaseOnThe80s(books));

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique(array) {
    return array.every((book) => !array.some((bookVerify) => (bookVerify.author.birthYear === book.author.birthYear) && (bookVerify.author.name !== book.author.name)));
}

console.log(authorUnique(books));
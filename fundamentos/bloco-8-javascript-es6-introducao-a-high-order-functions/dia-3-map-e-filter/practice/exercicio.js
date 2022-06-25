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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames(array) {
    const formatedData = books.map((element) => {
        return `${element.name} - ${element.genre} - ${element.author.name}`
    });
    return formatedData;
}

console.log('Resposta da 1');
console.table(formatedBookNames(books));

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
function nameAndAge(array) {
    const newArray = array.map((element) => {
        const age = element.releaseYear - element.author.birthYear;
        return {
            author: element.author.name,
            age: age,
        }
    });
    return newArray.sort((a, b) => (a.age > b.age ? 1 : -1));
}

console.log('Resposta da 2');
console.table(nameAndAge(books));

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
function fantasyOrScienceFiction(array) {
    return array.filter((element) => {
        return element.genre === 'Fantasia' || element.genre === 'Ficção Científica';
    })
}

console.log('Resposta da 3');
console.table(fantasyOrScienceFiction(books));

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
function oldBooksOrdered(array) {
    const newArray = array.filter((element) => {
        return element.releaseYear <= 1962; 
    });
    return newArray.sort((a, b) => a < b ? 1 : -1);
}

console.log('Resposta da 4');
console.table(oldBooksOrdered(books));

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors(array) {
    const newArray = fantasyOrScienceFiction(array);
    const arrayWithOnlyName = newArray.map((filtered) => {
        return filtered.author.name;
    });
    return arrayWithOnlyName.sort();
}

console.log('Resposta da 5');
console.table(fantasyOrScienceFictionAuthors(books));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks(array) {
    const booksFiltered = oldBooksOrdered(array);
    return booksFiltered.map((element) => {
        return element.name;
    })
}

console.log('Resposta da 6');
console.table(oldBooks(books));

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName(array) {
    const mappedNames = array.map((element) => {
        element.author.name = element.author.name.replaceAll(/[^.]/g, "")
        return element;
    });
    const result = mappedNames.find((element) => element.author.name === '...');
    return result.name;
}

console.log('Resposta da 7');
console.log(authorWith3DotsOnName(books));
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log(`Bem-vinda, ${info.personagem}`);
console.log(' ');


// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';
console.log(info.recorrente);
console.log(' ');

// 3 - Faça um for/in que mostre todas as chaves do objeto. 
for (let key in info) {
    console.log(key);
}
console.log(' ');

//  4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for (let key in info) {
    console.log(info[key]);
}
console.log(' ');

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (info[key] === info2[key]) {
        console.log('Ambos recorrentes');
    } else {
        console.log(`${info[key]} e ${info2[key]}`);
    }
    
}

console.log(' ');

// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
leitor.nomeCompleto = `${leitor.nome} ${leitor.sobrenome}`;
console.log(`O livro favorito de ${leitor.nomeCompleto} se chama '${leitor.livrosFavoritos[0].titulo}'.`);

console.log(' ');

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:
// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//  }
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    }
);

console.log(' ');

// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livro(s) favorito(s).`);

console.log(' ');
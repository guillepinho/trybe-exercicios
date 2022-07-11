// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

describe('teste uppercase', () => {
    it('Devolve MAIOR se passado maior como parametro', (done) => {
        uppercase('maior', (string) => {
            try {
                expect(string).toBe('MAIOR');
                done();
            } catch (error) {
                done(error);
            }
        })
    });
})


// 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?
const pokemons = [
    {
        name: 'Bulbasaur',
        type: 'Grass',
        ability: 'Razor Leaf',
    },
    {
        name: 'Charmander',
        type: 'Fire',
        ability: 'Ember',
    },
    {
        name: 'Squirtle',
        type: 'Water',
        ability: 'Water Gun',
    },
];

function getPokemonDetails(filter, callback) {
    setTimeout(() => {
        if (pokemons.find(filter) === undefined) {
            return callback(new Error('Não temos esse pokémon para você :('), null);
        }
        const pokemon = pokemons.find(filter);

        const { name, type, ability } = pokemon;

        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

        callback(null, messageFromProfOak);
    }, 2000);
}

getPokemonDetails(({ name }) => name === 'Squirtle', (error, message) => {
    if (error) return console.log(error);
    if (message) return console.log(message);
});

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

describe('A função getPokemonDetails', () => {
    it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
        const callbackFunc = (error, result) => {
            expect(error.message).toBe('Não temos esse pokémon para você :(');
            done();
        }
        getPokemonDetails(({ name }) => name === 'Charizard', callbackFunc);
    });

    it('retorna um pokemon que existe no banco de dados', (done) => {
        const callbackFunc = (error, result) => {
            expect(result).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
            done();
        }
        getPokemonDetails(({ name }) => name === 'Squirtle', callbackFunc);
    });
});
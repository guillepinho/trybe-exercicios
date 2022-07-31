

const { fetchCharacter } = require('./asyncawait.js');

global.fetch = jest.fn(fetchCharacter);
afterEach(jest.clearAllMocks);

describe('Teste Geral da fetchCharacter', () => {
    it('Verifica se o nome da personagem é Wonder Woman', async () => {
        expect.assertions(2);

        const character = await fetchCharacter('720');
        expect(character.name).not.toEqual('Spider');
        expect(character.name).toEqual('Wonder Woman');
    });

    it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
        expect.assertions(1);

        const failRequest = await fetchCharacter('');
        expect(failRequest.error).toBe('invalid id');
    });

    it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
        expect.assertions(1);

        const result = { response: 'error', error: 'invalid id' };

        const noParam = await fetchCharacter();
        expect(JSON.stringify(noParam)).toBe(JSON.stringify(result));
    });

    // it('Verifica se fetch é chamada com o endpoint correto', async () => {
    //     const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    //     await fetchCharacter('720');
    //     expect(fetch).toHaveBeenCalledTimes(0);
    //     expect(fetch).toHaveBeenCalledWith(url);
    // });
})
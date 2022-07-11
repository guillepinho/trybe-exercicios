const { consultaCEP } = require('./consultaCEP.js');

describe('Testes da função de Consulta ao CEP', () => {
    test('Verifica se a função retorna uma string contendo o endereço completo do CEP', async () => {
        expect(await consultaCEP('51021300')).toEqual('CEP: 51021-300, Rua Jorge Couceiro da Costa Eiras, no bairro de Boa Viagem, na cidade de Recife/PE.');
    })
});
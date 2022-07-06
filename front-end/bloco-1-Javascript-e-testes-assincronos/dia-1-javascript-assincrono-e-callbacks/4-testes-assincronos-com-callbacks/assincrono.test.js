// test('Não deveria passar!', () => {
//     setTimeout(() => {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//     }, 500);
// });


//Para que o Jest espere a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done, que precisa ser chamada após os testes assíncronos.
// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//         expect(10).toBe(5);
//         console.log('Deveria falhar!');
//         done();
//     }, 500);
// });

// Apesar do código acima parecer correto, irá falhar com uma mensagem de timeout. O motivo é que quando uma asserção (verificação) falha, a exceção é lançada, ou seja, algo inesperado aconteceu. Dessa forma, o fluxo é interrompido antes que a instrução done() seja executada. Para resolver este problema podemos colocar um bloco try/catch em volta da nossa asserção. Enquanto o try tenta executar a função no seu escopo com sucesso, o catch "captura" o erro, chamando a callback done:
// test('Não deveria passar!', (done) => {
//     setTimeout(() => {
//         try {
//             expect(10).toBe(5);
//             console.log('Deveria falhar!');
//             done();
//         } catch (error) {
//             done();
//         }
//     }, 500);
// });

// Estamos quase lá... O código acima irá gerar um falso-positivo. O motivo é que não estamos passando nenhuma ação a ser realizada quando o erro acontece e "encerramos" nosso teste com o done() sem lançar nenhum erro, dessa forma o teste é interpretado como "correto". Para resolver, podemos passar o parâmetro de erro para o catch. Dessa forma, caso nosso try não consiga executar o código dentro dele, cairá no catch, que vai pegar esse erro e vai encerrar nosso teste lançando um erro.
test('Não deveria passar!', (done) => {
    setTimeout(() => {
        try {
            expect(10).toBe(5);
            console.log('Deveria falhar!');
            done();
        } catch (error) {
            done(error); // Alteramos esta linha
        }
    }, 500);
});
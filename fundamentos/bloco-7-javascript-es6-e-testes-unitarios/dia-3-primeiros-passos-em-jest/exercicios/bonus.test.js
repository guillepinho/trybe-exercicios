const { searchEmployee, professionalBoard } = require('./bonus');

describe('Function to search employees', () => {
    it('Checa se a função existe', () => {
        expect(searchEmployee).toBeDefined();
    }),
        it('Checa se retorna um resultado de um funcionário', () => {
            expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
        }),
        it('Checa se retorna um resultado de um funcionário', () => {
            expect(searchEmployee('5569-4', 'firstName')).toEqual('George');
        }),
        it('Checa se retorna um erro de ID não identificada', () => {
            expect(() => searchEmployee('0000-0', 'firstName')).toThrow('ID não identificada');
        }),
        it('Checa se retorna um resultado de um funcionário', () => {
            expect(() => searchEmployee('5569-4', 'danceBaby')).toThrow('Informação indisponível');
        })
});



// Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada.
// Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada".
// Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível".
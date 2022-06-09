const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

customer1.lastName = 'Faria';
customer1['middleName'] = 'Alves';

console.log(customer1);

// Praticar

const fun = (objeto, chave, valor) => {
    try {
        objeto = {};
        objeto[chave] = valor;
        return objeto;
    } catch (error) {
        return 'algo deu errado';
    }
};

console.log(fun('object', 'name', 'Guilherme')); 
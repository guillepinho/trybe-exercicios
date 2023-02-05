// O $mod seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado, ou seja, é o módulo % do javascript.

// { _id: 1, item: "abc123", qty: 0 },
// { _id: 2, item: "xyz123", qty: 5 },
// { _id: 3, item: "ijk123", qty: 12 }

db.inventory.find({ qty: { $mod: [4, 0] } }); // todos os campos em que o módulo de 4 seja 0. Retornará 1 e 3.

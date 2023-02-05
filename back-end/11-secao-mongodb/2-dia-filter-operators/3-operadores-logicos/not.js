// { campo: { $not: { <operador ou expressão> } } }

db.inventory.find({ price: { $not: { $gt: 1.99 } } }) // verifica documentos que não existe a prop price ou que se existe, ela não é maior que 1.99

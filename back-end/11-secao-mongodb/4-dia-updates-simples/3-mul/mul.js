// O operador $mul multiplica o valor de um campo por um número especificado, persistindo o resultado dessa operação sem a necessidade do operador $set.

db.products.insertOne(
  { "_id": 1, "item": "ABC", "price": NumberDecimal("10.99"), "qty": 25 }
);

db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);

// O resultado dessa operação é o novo valor do campo price é o valor original 10.99 multiplicado por 1.25, e o valor do campo qty multiplicado por 2

// Se o campo não existir, o campo é criado com valor 0.

// O mul também tenta converter tipos, se possível, para formar a multiplicação
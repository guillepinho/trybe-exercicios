// Uma maneira simples de remover o primeiro ou o último elemento de um array é utilizar o operador $pop. Passando o valor -1 ao operador $pop você removerá o primeiro elemento. Já ao passar o valor 1, você removerá o último elemento do array.

db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } }); // primeiro item da array

db.supplies.updateOne({ _id: 1 }, { $pop: { items: 1 } }); // último item da array
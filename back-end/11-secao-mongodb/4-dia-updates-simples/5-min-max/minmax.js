// Ambos fazem o mesmo tipo de comparação antes de executar a operação, porém em “sentidos” diferentes:

//     $min: Altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for menor do que o valor do campo atual.
//     $max: Altera o valor do campo atual para o valor passado pelo método se o valor passado pelo método for maior do que o valor do campo atual.

[
  { _id: 1, campo: 25 },
  { _id: 2, campo: 50 },
  { _id: 3, campo: 100 }
]

db.collection.updateMany({}, { $max: { campo: 75 } });
// Atualizando todos os valores do atributo "campo" para 75 caso sejam menores

db.collection.updateMany({}, { $min: { campo: 42 } });
// Atualizando todos os valores do atributo "campo" para 42 caso sejam maiores
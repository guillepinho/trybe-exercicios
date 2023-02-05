// { $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }

db.inventory.find({
  $and: [
      { price: { $ne: 1.99 } },
      { price: { $exists: true } }
  ]
}); // Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo price é diferente de 1.99 e o atributo price existe.

db.inventory.find({
  $and: [
      { price: { $gt: 0.99, $lt: 1.99 } },
      {
          $or: [
              { sale : true },
              { qty : { $lt : 20 } }
          ]
      }
  ]
}); // Essa consulta seleciona todos os documentos da coleção inventory em que o valor do campo price é maior que 0.99 e menor que 1.99, E o valor do atributo sale é igual a true, OU o valor do atributo qty é menor do que 20. Ou seja, essa expressão é equivalente a (price > 0.99 E price < 1.99) (onde o E está implícito na vírgula aqui { $gt: 0.99, $lt: 1.99 }) E (sale = true OU qty < 20).

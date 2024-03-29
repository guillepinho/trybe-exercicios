// { $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }

db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })

// Essa consulta seleciona todos os documentos da coleção inventory em que o valor do atributo qty é menor do que 20 ou o valor do atributo price é igual a 10.
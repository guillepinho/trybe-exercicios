// { $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] }

db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] });

// Essa query retorna todos os documentos da coleção inventory que:
// Contêm o atributo price com o valor diferente de 1.99 e o atributo sale com o valor diferente de true;
// Ou contêm o atributo price com valor diferente de 1.99 e não contêm o atributo sale;
// Ou não contêm o atributo price e contêm o atributo sale com valor diferente de true;
// Ou não contêm o atributo price e nem o atributo sale.
// Pode parecer complexo, mas você fará mais exercícios para praticar esse operador.
// o size seleciona documentos em que uma array contenha um número de elementos especificado. Length.

// { _id: 1, tags: ["red", "green"] },
// { _id: 2, tags: ["apple", "lime"] },
// { _id: 3, tags: "fruit" },
// { _id: 4, tags: ["orange", "lemon", "grapefruit"] }

db.products.find(
  { tags: { $size: 2 } }
);

// Seriam retornados os ids 1 e 2.
// IMPORTANTE: Só aceita números, não aceita, por exemplo, $gt, etc.
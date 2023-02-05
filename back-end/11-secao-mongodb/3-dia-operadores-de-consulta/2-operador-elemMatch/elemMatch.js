// é como o some, procura na array a combinação de pelo menos um elemento que satisfaça todos os critérios selecionados, podendo especificar várias queries para um array

// Exemplo:
// { _id: 1, results: [82, 85, 88] },
// { _id: 2, results: [75, 88, 89] }

db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);

// A querie localiza pelo menos um elemento maior que 80 e menor que 85. No caso, só o _id tem o 82.

// Exemplo 2:
// {
//   _id: 1,
//   results: [
//     { product: "abc", score: 10 },
//     { product: "xyz", score: 5 }
//   ]
// },
// {
//   _id: 2,
//   results: [
//     { product: "abc", score: 8 },
//     { product: "xyz", score: 7 }
//   ]
// },
// {
//   _id: 3,
//   results: [
//     { product: "abc", score: 7 },
//     { product: "xyz", score: 8 }
//   ]
// }

db.survey.find(
  { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
);

// A query acima procura nas arrays results ao menos uma que tenha um produto xyz e um score maior que 8. o _id: 3 atende.
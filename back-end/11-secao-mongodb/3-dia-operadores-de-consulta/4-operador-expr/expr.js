// o expr permite utilizar expressões de agregação e construir queries que comparem campos no mesmo documento.

// { _id: 1, category: "food", budget: 400, spent: 450 },
// { _id: 2, category: "drinks", budget: 100, spent: 150 },
// { _id: 3, category: "clothes", budget: 100, spent: 50 },
// { _id: 4, category: "misc", budget: 500, spent: 300 },
// { _id: 5, category: "travel", budget: 200, spent: 650 }

db.monthlyBudget.find(
  {
    $expr: { $gt: [ "$spent", "$budget" ] }
  }
);

// Essa querie procura os documentos em que spent seja $gt que budget. São retornados 1, 2 e 5.
// IMPORTANTE: Perceba que não se usa valores, o $gt usa campos, porque o $expr denota comparação de campos.
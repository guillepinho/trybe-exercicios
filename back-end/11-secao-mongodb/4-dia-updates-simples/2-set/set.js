// $set altera valor de campo, se o campo não existir, ele é criado.
// se especificar dot notation, são criados subdocumentos.

db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);

// Para o documento que corresponder ao critério de filtro em que o campo _id seja igual a 100, a operação altera o valor dos campos quantity, details e tags

// Para alterar campos dentro de subdocumentos, você deve utilizar o mesmo conceito de dot notation visto durante as operações de find().

// A operação abaixo altera o valor do campo make dentro do subdocumento details em que o campo _id seja igual a 100:

db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

// A query abaixo tem como critério de seleção o campo _id igual a 100. Ela altera o segundo elemento (índice 1) do array tags e o campo rating no primeiro elemento (índice 0) do array ratings:

db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);
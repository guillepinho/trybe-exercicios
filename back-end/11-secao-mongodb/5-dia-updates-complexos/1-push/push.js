// O operador $push adiciona um valor a um array. Se o campo não existir no documento, um novo array com o valor em um elemento será adicionado.

// { $push: { <campo1>: <valor1>, ... } }

//  Em conjunto com o $push você pode utilizar o que chamamos de modificadores. Cada um desses modificadores tem funções específicas que você verá melhor com exemplos. São eles:
//     $each: Adiciona múltiplos valores a um array;
//     $slice: Limita o número de elementos do array. Requer o uso do modificador $each;
//     $sort: Ordena os elementos do array. Requer o uso do modificador $each;
//     $position: Especifica a posição do elemento que está sendo inserido no array. Também requer o modificador $each. Sem o modificador $position, o operador $push adiciona o elemento no final do array.

//  Quando você utiliza um modificador, o processo de push ocorre na seguinte ordem, independentemente da ordem em que os modificadores aparecem:
//     Altera o array para adicionar os elementos na posição correta;
//     Aplica a ordenação ($sort), se especificada;
//     Limita o array ($slice), se especificado;
//     Armazena o array.

// upsert: true > torna o update um insert tbm, caso o documento não exista

db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        "name": "notepad",
        "price":  35.29,
        "quantity": 2,
      },
    },
  },
  { upsert: true },
);

// resultado:
// {
// 	_id : 1,
// 	items : [
// 		{
// 			"name" : "notepad",
// 			"price" : 35.29,
// 			"quantity" : 2,
// 		},
// 	],
// }

// Adicionando multiplos valores com o $each

db.supplies.updateOne(
  {},
  {
    $push: {
      items: {
        $each: [
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
        ],
      },
    },
  },
  { upsert: true },
);

// resultado:
// {
// 	_id : 1,
// 	items : [
// 		{
// 			"name" : "notepad",
// 			"price" : 35.29,
// 			"quantity" : 2,
// 		},
// 		{
// 			"name" : "pens",
// 			"price" : 56.12,
// 			"quantity" : 5,
// 		},
// 		{
// 			"name" : "envelopes",
// 			"price" : 19.95,
// 			"quantity" : 8,
// 		},
// 	],
// }

db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
        $sort: { "quantity": -1 },
        $slice: 2,
      },
    },
  },
  { upsert: true },
);

// O modificador $each para adicionar múltiplos documentos ao array items;
// O modificador $sort para ordenar todos os elementos alterados no array items pelo campo quantity em ordem decrescente;
// E o modificador $slice para manter apenas os dois primeiros elementos ordenados no array items.


// O operador $addToSet é utilizado quando você precisa garantir que os valores de um array não sejam duplicados. Ou seja, ele garante que apenas valores únicos estejam presentes no array, tratando o array como se fosse um conjunto (uma vez que conjuntos, na matemática, não podem conter elementos duplicados).

// Se você utilizá-lo em um campo que não existe no documento alterado, ele criará um campo do tipo array com o valor especificado na operação;
// Se você utilizá-lo em um campo já existente no documento, mas esse campo não for um array, a operação não funcionará;
// Se o valor passado for um documento, o MongoDB o considerará como duplicado se um documento existente no array for exatamente igual ao documento a ser adicionado, ou seja, possui os mesmos campos com os mesmos valores e esses campos estão na mesma ordem.

// A operação abaixo adiciona o elemento “accessories” ao array tags desde que “accessories” não exista no array:
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } },
);

// A operação abaixo tenta adicionar o elemento “camera” ao array tags. Porém, esse elemento já existe e a operação não surtirá efeito:
db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "camera"  } },
);

// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 0 }

// Você pode utilizar o operador $addToSet combinado com o modificador $each. Esse modificador permite que você adicione múltiplos valores a um array.

db.inventory.updateOne(
  { _id: 2 },
  {
    $addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"],
      },
    },
  },
);
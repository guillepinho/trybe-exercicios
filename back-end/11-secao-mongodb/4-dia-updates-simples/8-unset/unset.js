// Para remover um ou mais campos de um documento, utilize o operador $unset.

db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);
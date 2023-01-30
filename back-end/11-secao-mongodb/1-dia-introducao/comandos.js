db.colecaoum.insertOne({ "product": "Lapis", "stock": 10, "price": 20, "status": "a" }); // insere um documento

db.colecaoum.insertMany([
  { "product": "Lapis", "stock": 10, "price": 20, "status": "a" },
  { "product": "Tesoura", "price": 5, "status": "b" },
  { "product": "Borracha", "price": 15, "status": "a" }
], { ordered: false }); // insere vários documentos

db.colecaoum.find(_query, _projection);
db.colecaoum.find(); // findAll

db.colecaoum.find({ product: "Lapis" }, { product: 1 }); // query em product, nome "Lapis", devolve só "product"
db.colecaoum.find({ product: "Lapis" }, { product: 1, _id: 0 }); // se eu quiser omitir o ID, preciso ser explicíto, ele é mandado por default
db.colecaoum.find({ price: { $gt: 10 }}, { product: 1, _id: 0 }); // $gt = greater than

db.colecaoum.find({ "price.last": 10 }); // essa busca, com dot notation, buscaria um subdocumento

db.colecaoum.countDocuments({ product: "Lapis" }); // volta a contagem de documentos

db.colecaoum.find({ product: "Lapis" }).limit(1); // limita o nr de documentos retornados

db.colecaoum.find({ product: "Lapis" }).pretty(); // deixa os dados mais legíveis, como um json,

db.colecaoum.find({ product: "Lapis" }).skip(1).pretty(); // controla o ponto de partida da busca, como o offset
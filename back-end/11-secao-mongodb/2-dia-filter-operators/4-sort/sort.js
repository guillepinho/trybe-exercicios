// db.colecao.find().sort({ "campo": "1 ou -1"})
// 1 = asc
// -1 = desc


db.example.find({}, { "value": 1, "name": 1 }).sort({ "value": -1, "name": 1 })

db.colecao.find().sort({ nomeDoAtributo: 1 }) // certo
db.colecao.sort({ nomeDoAtributo: 1 }) // errado


// Desafio
// 1
db.restaurants.find({}).sort({ name: 1 });

// 2
db.restaurants.find({}).sort({ rating: -1 });
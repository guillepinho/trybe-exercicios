db.inventory.deleteOne({ status: "D" }); // primeiro documento com esse status

db.inventory.deleteMany({ status : "A" }); // todos documentos com esse status

db.inventory.deleteMany({}); // remove todos os documentos da coleção

// challenges
// 1 
db.restaurants.deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices' });
// 2
db.restaurants.deleteMany({ cuisine: 'American' });
// Sintaxe
// { <campo>: { $<operador>: <valor> } }
// ordem de comparação ^

db.inventory.find({ qty: { $lt: 20 }}); // less than
db.inventory.find({ qty: { $lte: 20 }}); // less than or equal

db.inventory.find({ qty: { $gt: 20 } }); // greater than
db.inventory.find({ qty: { $gte: 20 } }); // greater than or equal

db.inventory.find({ qty: { $eq: 20 } }); // equal - desnecessário, equivalente a qty: 20
db.inventory.find({ qty: { $ne: 20 } }); // not equal

db.inventory.find({ qty: { $in: [ 5, 15 ] } }); // equal to one of each in array - inside - 5 ou 15
db.inventory.find({ qty: { $nin: [ 5, 15 ] } }); // not equal to one of each in array - outside - não é 5, nem 15

// Practice
db.restaurants.countDocuments({ borough: { $in: [ 'Queens', 'State Island', 'Bronx' ] } });

db.restaurants.countDocuments({ cuisine: { $ne: 'American' } });

db.restaurants.countDocuments({ rating: { $gte: 8 } });

db.restaurants.countDocuments({ rating: { $lt: 4 } });

db.restaurants.countDocuments({ rating: { $nin: [ 5, 6, 7] } });
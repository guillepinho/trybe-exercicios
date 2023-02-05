// 1
db.restaurants.countDocuments({ rating: { $not: { $lte: 5 } } });

// 2
db.restaurants.countDocuments({ $or: [ { rating: { $gte: 6 } }, { borough: 'Brooklyn'  } ] });

// 3
db.restaurants.countDocuments({ $and: [
  { borough: { $in: [ 'Queens', 'Staten Island', 'Brooklyn' ] } },
  { rating: { $gt: 4 } },
] });

// 4
db.restaurants.countDocuments({ $nor: [ { rating: 1 }, { cuisine: 'American' } ] });

// 5
db.restaurants.countDocuments({
  $and:[
  { $or: [{ rating: { $gt: 6, $lt: 10 } }] },
  { $or: [{ borough: 'Brooklyn' }, { cuisine: { $ne: 'Delicatessen' } }]  },
]});
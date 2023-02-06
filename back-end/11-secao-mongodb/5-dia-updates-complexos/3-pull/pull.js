// O operador $pull remove de um array existente todos os elementos com um ou mais valores que atendam à condição especificada.

// {
//   _id: 1,
//   items: [
//     {
//       "name" : "notepad",
//       "price" : 35.29,
//       "quantity" : 2,
//     },
//     {
//       "name": "envelopes",
//       "price": 19.95,
//       "quantity": 8,
//     },
//     {
//       "name": "pens",
//       "price": 56.12,
//       "quantity": 5,
//     },
//   ],
// },
// {
//   _id: 2,
//   items: [
//     {
//       "name" : "pencil",
//       "price" : 5.29,
//       "quantity" : 2,
//     },
//     {
//       "name": "envelopes",
//       "price": 19.95,
//       "quantity": 8,
//     },
//     {
//       "name": "backpack",
//       "price": 80.12,
//       "quantity": 1,
//     },
//     {
//       "name": "pens",
//       "price": 56.12,
//       "quantity": 5,
//     },
//   ],
// }

db.supplies.updateMany(
  {},
  {
    $pull: {
      items: {
        name: { $in: ["pens", "envelopes"] },
      },
    },
  },
);

// {
//   _id : 1,
//   items : [
//     {
//       "name" : "notepad",
//       "price" : 35.29,
//       "quantity" : 2,
//     },
//   ],
// },
// {
//   _id : 2,
//   items : [
//     {
//       "name" : "pencil",
//       "price" : 5.29,
//       "quantity" : 2,
//     },
//     {
//       "name" : "backpack",
//       "price" : 80.12,
//       "quantity" : 1,
//     },
//   ],
// }

db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 },
    },
  },
);

db.survey.updateMany(
  {},
  {
    $pull: {
      results: { score: 8 , item: "B" },
    },
  },
);
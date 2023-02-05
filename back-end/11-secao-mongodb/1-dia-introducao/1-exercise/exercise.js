// 1
db.bios.find({ _id: 9 }).pretty();
// 2
db.bios.find({ _id: 9 }, { name: 1 }).pretty();
// 3
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 }).pretty();
// 4
db.bios.find({ "name.first": "John" }).pretty();
// 5
db.bios.find().limit(3).pretty();
// 6 
db.bios.find().skip(5).limit(2).pretty();
// 7
db.books.countDocuments({});
// 8
db.books.countDocuments({ status: 'PUBLISH' });
// 9
db.books.find({}, { _id: 0, title: 1, authors: 1, status: 1 }).limit(3);
// 10
db.books.find({ status: 'MEAP' }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10);
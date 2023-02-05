// $all é como um every, bate todos os campos da array e verifica se contém os elementos especificados. É irrelevante se a array possui elementos, ou a ordem deles.

db.inventory.find({ tags: ["red", "blank"] }); // verifica que as tags sejam exatamente iguais a red blank.
db.inventory.find({ tags: { $all: ["red", "blank"] } }); // verifica todas as tegas que tenham red e blank.
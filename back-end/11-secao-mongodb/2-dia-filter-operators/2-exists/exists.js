// { campo: { $exists: <boolean> } }

db.inventory.find({ qty: { $exists: true } }) // verifica se o documento possui a propriedade
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } }) // verifica se possui a propriedade e se esse valor não é 5 ou 15
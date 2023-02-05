// o regex fornece poderes das 'expressões regulares' para seleção de strings, parecido com o LIKE do SQL.

// { _id: 100, sku: "abc123", description: "Single line description." },
// { _id: 101, sku: "abc789", description: "First line\nSecond line" },
// { _id: 102, sku: "xyz456", description: "Many spaces before     line" },
// { _id: 103, sku: "xyz789", description: "Multiple\nline description" }

db.products.find({ sku: { $regex: /789$/ } });

// Seleciona todos os sky que terminam em 789, ou seja, o 101 e o 103.
// Equivale ao LIKE do SQL: SELECT * FROM products WHERE sku LIKE "%789";
// Funciona como um regex normal:

db.products.find({ sku: { $regex: /^ABC/i } }); // case insensitive, vai retornar 100 e 101.


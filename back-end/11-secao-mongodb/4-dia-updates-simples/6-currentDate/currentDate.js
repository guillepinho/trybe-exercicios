// O operador $currentDate atribui ao valor de um campo a data corrente, utilizando um tipo Date ou timestamp. Se você não especificar o tipo, por padrão, o MongoDB atribui o valor do tipo Date.

// { $currentDate: { <campo>: <typeSpecification>, ... } }

db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);

db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true,
      "cancellation.date": { $type: "timestamp" }
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);
// incrementa ou decrementa valores de campo específico

db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);

// decrementa quantity em 2, e metric.orders é incrementado em 1


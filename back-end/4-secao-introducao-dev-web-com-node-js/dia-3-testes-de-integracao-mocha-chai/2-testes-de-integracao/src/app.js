const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacauTrybe.getChocolateCount();
  res.status(200).json({ totalChocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const search = await cacauTrybe.searchChocolateByName(name);

  if (name.length > 0) {
    res.status(200).json({ chocolates: search });
  } else {
    res.status(404).json({ chocolates: search })
  }
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const content = req.body;

  const chocolate = await cacauTrybe.updatedChocolateById(Number(id), content);
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(201).json({ chocolate });
});


module.exports = app;
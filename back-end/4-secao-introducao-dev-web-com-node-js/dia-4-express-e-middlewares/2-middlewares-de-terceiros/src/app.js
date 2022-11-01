const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(morgan('combined'));
// faz a busca por um arquivo por meio do req.path. Caso ele encontre, já responde a requisição com esse arquivo
app.use('/images', express.static('images'));

app.post('/fail', (req, res) => {
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

app.use(express.json());

app.post('/hello', (req, res) => {
  // req.body agora está disponível
  res.status(200).json({ greeting: `Hello, ${req.body.nome}!` });
});

module.exports = app;
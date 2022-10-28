const express = require('express');

const app = express();

const OK = 200;
const INTERNAL_SERVER_ERROR = 500;
const NOT_FOUND = 404;


app.get('/', (req, res) => res.status(OK).json({ message: 'Oi, Luqueta! Melhoras da coluna, bro' }));

module.exports = app;
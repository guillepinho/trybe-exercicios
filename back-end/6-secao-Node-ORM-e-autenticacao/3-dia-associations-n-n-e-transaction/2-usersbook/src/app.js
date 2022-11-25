const express = require('express');

const app = express();

app.use(express.json());

const userBookController = require('./controllers/userBook.controller');

app.get('/userbooks/:id', userBookController.getUsersBooksById);

module.exports = app;
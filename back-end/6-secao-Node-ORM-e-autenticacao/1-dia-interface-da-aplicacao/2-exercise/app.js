const express = require('express');

const Book = require('./controllers/book.controllers');

const app = express();

app.use(express.json());

app.get('/books', Book.getAll);

app.get('/books/:id', Book.getById);

app.post('/books', Book.createBook);

app.put('/books/:id', Book.updatedBook);

app.delete('/books/:id', Book.removeBook);

module.exports = app;
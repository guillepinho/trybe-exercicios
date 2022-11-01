const express = require('express');
require('express-async-errors');

// No arquivo src/app.js, repare no uso de mais um parâmetro na chamada à função app.use. Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho(no caso, '/teams').

// Já no src/routes/teamsRouter.js, repare que, ao registrar uma rota no router, não precisamos repetir a parte do caminho que já passamos para app.use. É por isso que a rota que definimos com router.get('/:id') na verdade se torna acessível por meio de /teams/:id.

// Routers suportam que qualquer tipo de middleware seja registrado. Ou seja, se tivermos vários endpoints com autenticação e vários endpoints abertos, podemos criar um router, e registrar nele nosso middleware de autenticação, bem como todas as rotas que precisam ser autenticadas, registrando as rotas abertas diretamente no app.

// require no router
const teamsRouter = require('./routes/teamsRouter');

const app = express();

// Transforma o conteúdo HTTP em JSON, com o objeto req e objeto body
app.use(express.json());
// Monta o router na rota /teams
app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => res.status(500).send({ message: `Request not found. ${err.message}` }));

module.exports = app;
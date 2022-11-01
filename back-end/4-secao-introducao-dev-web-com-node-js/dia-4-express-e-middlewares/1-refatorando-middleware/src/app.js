const express = require('express');
require('express-async-errors');

const validateTeam = require('./middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');

const app = express();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

// Requere credenciais para as próximas rotas
app.use(apiCredentials);
app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', validateTeam, (req, res) => {
    if (!req.teams.teams.includes(req.body.sigla) && teams.every((t) => t.sigla !== req.body.sigla)) {
      return res.status(401).send({ message: 'Bad Request. Unauthorized client or team exists.' })
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

app.use((err, _req, res, _next) => res.status(404).send({ message: `Request not found. ${err.message}` }));

module.exports = app;
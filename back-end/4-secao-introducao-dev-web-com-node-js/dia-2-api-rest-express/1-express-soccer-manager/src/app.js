const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

const OK = 200;
const CREATED = 201;
const NOT_FOUND = 404;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(OK).json({ message: 'Hello world!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const thisTeam = teams.find((team) => team.id === Number(id));

  if (!thisTeam) {
    res.status(NOT_FOUND).json({ message: 'Team not found' });
    return;
  } 

  res.status(OK).json({ team: thisTeam });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(CREATED).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(NOT_FOUND).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(OK).json({ updateTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(OK).end();
});

module.exports = app;
const express = require('express');

const patientsController = require('./controllers/patientsControllers');
const planController = require('./controllers/planControllers');
const surgeryController = require('./controllers/surgeryController');

const app = express();
app.use(express.json());

app.get('/patients', patientsController.getAllPatientsAndPlans);
app.get('/patients/surgery', patientsController.getAllPatientsAndSurgeries);
app.get('/patients/fulldata', patientsController.getAllPatientsAndSurgeriesNoDoc);
app.post('/patients', patientsController.insertPatient);

app.get('/plan/:id', planController.getPlanAndPatients);

app.get('/surgeries/:name', surgeryController.getAllSurgeries);

module.exports = app;
const express = require('express');
require('express-async-errors');

// Routers
const activitiesRouter = require('./routes/activites.router');
const userRouter = require('./routes/user.router');

// Middlewares
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', userRouter);

app.use(errorMiddleware);

module.exports = app;
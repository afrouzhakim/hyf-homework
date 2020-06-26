const express = require("express");
const app = express();
const port = 3000;

const getMeals = require ('./routes/meals.js');
const getCheapMeals = require ('./routes/cheap-meals.js');
const largeMeals = require('./routes/large-Meals');
const meal = require('./routes/meal');
const reservations = require('./routes/reservations');
const reservation = require('./routes/reservation');

app.get('/meals', getMeals);
app.get('/cheap-meals', getCheapMeals);
app.get('/large-meals', largeMeals);
app.get('/meal', meal);
app.get('/reservations', reservations);
app.get('/reservation', reservation);
app.listen(port);

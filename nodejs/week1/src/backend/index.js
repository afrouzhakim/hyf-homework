const express = require("express");
const app = express();
const port = 3000;

const getMeals = require ('./routes/meals.js');
//const cheapMeals = require ('./router/cheapMeals.js');
//const randomMeal = require ('./router/randomMeal.js');
// const largeMeals = require('./router/largeMeals');
// const reservations = require('./router/reservations');

app.use ('/meals', getMeals);
// app.use('/cheap-meals' , cheapMeals);
// app.use('/meal' , randomMeal);
// app.use('/large-meals' , largeMeals);
// app.use('/reservations' , reservations);

app.get('/meals', getMeals);
app.listen(port);

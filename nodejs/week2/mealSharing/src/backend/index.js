const express = require("express");
const app = express();

const meals = require("./routes/meals.js");


app.use("/meals", meals);

app.listen(3000);
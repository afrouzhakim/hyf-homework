const express = require("express");
const app = express();

const meals = require("./routes/meals.js");
const reservations = require("./routes/reservations.js");
const reviews = require("./routes/reviews.js");

app.use("/meals", meals);
app.use("/reservations", reservations);
app.use("/reviews", reviews);


app.listen(3000);
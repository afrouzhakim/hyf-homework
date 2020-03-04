const express = require("express");
const app = express();

app.use('/', (req, res, next) => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes();
  console.log(`${date} ${time} request received for path: ${req.originalUrl}`);
  next();
})
app.use("/meals", require("./routes/meals.js"));
app.use("/reservations", require("./routes/reservations.js"));
app.use("/reviews", require("./routes/reviews.js"));

const server = app.listen(3000, () => {
  console.log("The app is running on localhost:3000!");
});
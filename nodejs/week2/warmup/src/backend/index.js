const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("small calculator");
});

app.get("/numbers/add", require("./routes/add.js")) 
app.get("/numbers/multiply/:first/:second", require("./routes/mul.js")) 

app.listen(5000, () => {
  console.log("server started in 5000!");
});

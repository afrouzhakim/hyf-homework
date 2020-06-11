const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

const cheapMeal = meals.filter(itemMeal => itemMeal.price < 70);

router.get("/cheap-meals", (req, res) => {
  res.json(cheapMeal);
});

module.exports = router;
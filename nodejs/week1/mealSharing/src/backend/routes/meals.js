const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");
meals.forEach(mealItem => {
    mealItem.review = reviews.filter(
      reviewItem => reviewItem.mealId === mealItem.id
    );
  });
router.get("/meals", (req, res) => {
    res.json(meals);
});

module.exports = router;
const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

const largeMeals = meals.filter(mealItem => mealItem.maxNumberOfGuests > 10);
largeMeals.forEach(mealItem => {
    mealItem.review = reviews.filter(
      reviewItem => reviewItem.mealId === mealItem.id
    );
  });
router.get("/large-meals", (req, res) => {
    res.json(largeMeals);
})
module.exports = router;
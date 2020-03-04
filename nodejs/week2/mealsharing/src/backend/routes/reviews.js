const express = require("express");
const router = express.Router();

const reviews = require("../data/review.json");

router.get("/", (req, res) => {
  res.send(reviews);
});

router.get('/:id', (req, res) => {
   const review = reviews.find((rev) => rev.id === parseInt(req.params.id));
   res.send(review);
});

module.exports = router;
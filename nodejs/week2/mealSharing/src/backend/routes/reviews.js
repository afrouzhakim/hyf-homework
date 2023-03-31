const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json")
let responseReview = reviews;
router.get("/", (req, res) => {
    res.send(responseReview);
})

router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let filteredById = reviews.filter(reviewItem => reviewItem.id === id);
    if (filteredById.length < 1) {
        responseReview = "Review id does not exist";
    } else {
        reseponseReview = filteredById;
    }
    res.send(reseponseReview);
})

module.exports = router;
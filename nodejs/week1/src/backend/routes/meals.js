const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");


const getMeals = (req, res) => {
    meals.forEach(mealItem => {
        mealItem.review =[];
        for (let review of reviews) {
            if (mealItem.id === review.meal_id){
                mealItem.review.push(review);
            }
        }
    })
    res.json(meals);
};
module.exports = getMeals;
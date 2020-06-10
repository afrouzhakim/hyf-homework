const mealsData = require("../data/meals.json");
const reviewsData = require("../data/reviews.json");
const mealFunc = function (request, response) {
    mealsData.forEach((mealItem) => {
        mealItem.review = [];    
        reviewsData.forEach((reviewItem) => {
           if (reviewItem.mealId === mealItem.id) {
              mealItem.review.push(reviewItem);
           };
        });
     });
    let randomIndex = Math.floor(Math.random() * mealsData.length);
    const randomMeal = mealsData[randomIndex];
    response.json(randomMeal);
}

module.exports = mealFunc;
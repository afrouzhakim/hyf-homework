const mealsData = require("../data/meals.json");
const reviewsData = require("../data/reviews.json");
const mealsFunc = function (request, response) {
    mealsData.forEach((mealItem) => {
        mealItem.review = [];    
        reviewsData.forEach((reviewItem) => {
           if (reviewItem.mealId === mealItem.id) {
              mealItem.review.push(reviewItem);
           };
        });
     });
    response.json(mealsData);
}
module.exports = mealsFunc;
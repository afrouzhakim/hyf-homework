const mealsData = require("../data/meals.json");
const reviewsData = require("../data/reviews.json");
const largeMeals = function (request, response) {
    const reviewOfMeals = mealsData.map(item => {
        item.reviews = reviewsData.filter(element => element.mealId === item.id)
        return item;
    });
    const large = reviewOfMeals.filter(item => item.maxNumberOfGuests > 10);
    response.json(large);
}
module.exports = largeMeals;
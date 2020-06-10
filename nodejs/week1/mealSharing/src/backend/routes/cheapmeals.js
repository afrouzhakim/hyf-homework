const mealsData = require("../data/meals.json");
const reviewsData = require("../data/reviews.json");
const cheapMeals = function (request, response) {
    const reviewOfmeals = mealsData.map(item => {
        item.reviews = reviewsData.filter(element => element.mealId === item.id)
        return item;
    });

    const cheap = reviewOfmeals.filter(item => item.price < 100);

    response.json(cheap);
}
module.exports = cheapMeals;
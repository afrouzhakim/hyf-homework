const express = require("express");
const router = express.Router();

const meals = require('../data/meals.json');
let responseMeals = meals;

router.get('/',(req, res) => {
    const {maxPrice, title, createAfter, limit} = req.query;
    if (maxPrice) {
        responseMeals = meals.filter(mealItem => mealItem.price < Number(maxPrice));
        res.send(responseMeals);
    }
    if(title){
        responseMeals = meals.filter(mealItem => mealItem.title.toLowerCase().trim().split(" ").join("") === title.toLowerCase().trim());
        res.send(responseMeals);
    }
    //test by => http://localhost:3000/meals?createAfter=2020-02-07
    if (createAfter) {
        responseMeals = meals.filter((mealItem) =>  Date.parse(mealItem.createdAt) > Date.parse(createAfter)) ;
        res.send(responseMeals);
    }
    if (limit) {
        responseMeals = meals.slice(0, limit);
    }
    
});

router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let filteredById = meals.filter(mealItem => mealItem.id === id)
    if (filteredById.length < 1) {
        responseMeals = "Meal id does not exist";
    } else {
        responseMeals = filteredById;
    }
    res.send(responseMeals);
})
module.exports = router;
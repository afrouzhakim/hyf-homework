const express = require("express");
const router = express.Router();

const meals = require('../data/meals.json');
let meal;
router.get('/:id', (req, res) => {
  meal = meals.find((items) => items.id === parseInt(req.params.id));
  res.send(meal);
});

router.get ('/', (req, res)=>{
   if(req.query.maxPrice){
    meal = meals.filter(meal => meal.price < parsInt(req.query.maxPrice));
   }
   else if(req.query.title){
    meal = meals.filter(meal =>meal.title.includes(req.query.title));
   }
   else if(req.query.date){
    meal = meals.filter(meal => {         
     return Date.parse(meal.createdAt) > Date.parse(req.query.date) ;
   });
  } 
  else if (req.query.limit){
    meal = meals.slice(0, req.query.limit);
  }
  res.send (meal);
});
module.exports = router;
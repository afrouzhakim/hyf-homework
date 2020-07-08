const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { request, response } = require("express");
//get all the meals
router.get("/", async (request, response) => {
  try {
    let meals = await knex("meal").select("title", "description");
    response.json(meals);
  } catch (error) {
    throw error;
  }
});
// // //post a new meal
router.post("/", async(request, response) => {
  
   try {
    const {
      id,
      title,
      maxNumberOfGuests,
      description,
      created_date,
      price
    }=request.body;
    const newMeal = {
      id,
      title,
      maxNumberOfGuests,
      description,
      created_date,
      price 
    }
   const addMeal = await knex("meal").insert(newMeal);
   response.send(addMeal);
   console.log(request.body);
    } catch (error) {
      throw error;
    }
})

// // //Returns meal by id
router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const mealById = await knex("meal").select().where({ id });
  response.json(mealById);
});

// // //Updates the meal by id
router.put("/:id", async(request, response) => {
  const {id} = request.params;
  const {title,
    maxNumberOfGuests,
    description,
    createdAt,
    price} = request.body;
  await knex("meal").where({ id }).update({ title, maxNumberOfGuests, description, createdAt, price });
  response.send(`Meal with id ${id} is updated`);
});

// // //Deletes the meal by id
router.delete("/:id", async(request, response) => {
  const {id} = request.params;
  await knex("meal").where({ id }).del();
  response.send(`Meal with id ${id} is deleted`);
})



//GET api/meals/ query parameters
router.get("/", async(request, response) => {
  console.log(request.query);
  try {
    let filteredMeal;
    const maxPrice = request.query.maxPrice;
    const intMaxPrice = parseInt(maxPrice);
    const availableReservations = request.query.availableReservations;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;

    if (maxPrice) {
      filteredMeal = await knex ("meal").where("price", "<", maxPrice);
    } 
    
    if (availableReservations == 'true' ) {
        filteredMeal = await knex('Meal')
      .select(
        knex.raw(
          `Meal.id, Meal.title, Meal.max_reservations, SUM(reservation.number_of_guests) AS total_guests`
        )
      )
      .innerJoin('reservation', 'meal.id', 'reservation.meal_id')
      .groupBy('Meal.id')
      .having(knex.raw(`total_guests < Meal.max_reservations`)) 

    }
    if (title) {
      filteredMeal = await knex("meal").where("title", "like", `%${title}%`);
    }
    if (createdAfter) {
      filteredMeal = await knex("meal").where("meal.created_date", ">", createdAfter);
    }
    if (limit) {
      filteredMeal = await knex("meal").limit(limit);
    }
    
    console.log(filteredMeal);
    response.send(filteredMeal);
  } catch (error) {
    response.send(error);
  }
})
module.exports = router;
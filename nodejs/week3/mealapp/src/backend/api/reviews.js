const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { request, response } = require("express");

//get all reviews
router.get("/", async (request, response) => {
    try {
        const allReviews = await knex.select("*").table("review");
        response.json(allReviews);
    } catch (error) {
    throw error;
    }
});

//post a new review
router.post("/", async(request, response) => {
    try {
        const { title, descrioption, meal_id, stars, created_date } = request.query;  
        const newReview = {
            title, 
            descrioption, 
            meal_id, 
            stars, 
            created_date
          };
         const addReview = await knex("review").insert(newReview);
         response.send(`Review with id ${id} is added`);
    }catch (error) {
        throw error;
      }
});

//Returns review by id
router.get("/:id", async (request, response) => {
    const { id } = request.params;
    const reviewById = await knex("review").select().where({ id });
    response.json(reviewById);
  });

//Updates the review by id
router.put("/:id", async(request, response) => {
    const {id} = request.params;
    const { title, descrioption, meal_id, stars, created_date} = request.query;
    const newReview = {
        title, 
        descrioption, 
        meal_id, 
        stars, 
        created_date
      }
    await knex("review").where({ id }).update({ title, descrioption, meal_id, stars, created_date });
    response.send(`Review with id ${id} is updated`);
  });
//Deletes the review by id
router.delete("/:id", async(request, response) => {
    const {id} = request.params;
    await knex("review").where({ id }).del();
    response.send(`Review with id ${id} is deleted`);
  })
module.exports = router;

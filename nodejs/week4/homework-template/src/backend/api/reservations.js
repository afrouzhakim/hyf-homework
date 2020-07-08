const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { request, response } = require("express");

//get all resrervations
router.get("/", async (request, response) => {
    try {
        const allReservations = await knex.select("*").table("reservation");
        response.json(allReservations);
    } catch (error) {
    throw error;
    }
});

//post a new reservation
router.post("/", async(request, response) => {
    try {
        const {id, number_of_guests, meal_id, created_date, guest_name, guest_phonenumber, guest_email } = request.body;  
        const newReservation = {
            id,  
            number_of_guests,
            meal_id,
            created_date,
            guest_name,
            guest_phonenumber,
            guest_email
          };
         const addReservation = await knex("reservation").insert(newReservation);
         response.send(`Reservation with id ${id} is added`);
    }catch (error) {
        throw error;
      }
});

//Returns reservation by id
router.get("/:id", async (request, response) => {
    const { id } = request.params;
    const reservationById = await knex("reservation").select().where({ id });
    response.json(reservationById);
  });

//Updates the reservation by id
router.put("/:id", async(request, response) => {
    const {id} = request.params;
    const { number_of_guests, meal_id, created_date } = request.query;
    const newReservation = {
        number_of_guests,
        meal_id,
        created_date
      }
    await knex("reservation").where({ id }).update({ number_of_guests, meal_id, created_date, guest_name, guest_phonenumber, guest_email });
    response.send(`Reservation with id ${id} is updated`);
  });
//Deletes the reservation by id
router.delete("/:id", async(request, response) => {
    const {id} = request.params;
    await knex("reservation").where({ id }).del();
    response.send(`Reservation with id ${id} is deleted`);
  })
module.exports = router;


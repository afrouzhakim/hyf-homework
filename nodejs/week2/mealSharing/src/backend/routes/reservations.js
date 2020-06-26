const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");
let reseponseReservation = reservations;
router.get("/", (req, res) => {
    res.send(reseponseReservation);
})

router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let filteredById = reservations.filter(reservationItem => reservationItem.id === id);
    if (filteredById.length < 1) {
        responseReservations = "Reservation id does not exist";
    } else {
        reseponseReservation = filteredById;
    }
    res.send(reseponseReservation);
})

module.exports = router;
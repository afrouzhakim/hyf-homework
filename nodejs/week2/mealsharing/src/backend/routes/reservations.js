const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/", (req, res) => {
  res.send(reservations);
});

router.get('/:id', (req, res) => {
   const id = Number(req.params.id);
   const reservation = reservations.find((res) => res.id === id);
   res.send(reservation);
});

module.exports = router;
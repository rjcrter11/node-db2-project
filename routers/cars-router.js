const express = require("express");

const db = require("../data/connection");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving car data" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .first()
    .then((car) => {
      res.status(200).json(car);
    });
  res.status(500).json({ message: "Error retrieving car" });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((ids) => {
      db("cars")
        .where({ VIN: ids[0] })
        .then((newCar) => {
          res.status(201).json(newCar);
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error posting Data" });
    });
});

module.exports = router;

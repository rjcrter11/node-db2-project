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
      res.json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve fruit" });
    });
});

router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData)
    .then((ids) => {
      db("cars")
        .where({ id: ids[0] })
        .then((newCar) => {
          res.status(201).json(newCar);
        });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error posting Data" });
    });
});

router.delete("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .del()
    .then((count) => {
      count > 0
        ? res.status(200).json({ success: `${count} car(s) deleted` })
        : res.status(404).json({ message: "Car not found" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error deleting car" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  db("cars")
    .where({ id: req.params.id })
    .update(changes)
    .then((count) => {
      count > 0
        ? res.status(200).json({ success: `${count} car(s) updated` })
        : res.status(404).json({ message: "Car not found " });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error updating car data" });
    });
});

module.exports = router;

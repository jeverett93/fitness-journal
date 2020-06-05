const express = require("express");
const db = require("../models");
const app = express();
const mongoose = require("mongoose");

app.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/workouts/:id", (req, res) => {
  const id = mongoose.Types.ObjectId(req.params.id);
  db.Workout.findOneAndUpdate(
    { _id: id }, 
    { $push: { exercises: req.body  } },
    function (error, data) {
      if (error) {
        res.json(error);
      } else {
        res.json(data);
      }
    });
});

app.post("/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = app;
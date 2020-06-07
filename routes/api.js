// requiring dependencies
const express = require("express");
const db = require("../models");
const app = express();
const mongoose = require("mongoose");

// GET route to pull up previous workout
app.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT route to update previous workout with new exercises
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

// POST route to add new workout
app.post("/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// GET route to pull stats of previous workouts
app.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// Exporting API routes to be used in other parts of the application
module.exports = app;
const express = require("express");
const Workout = require("../models/workout.js");
const app = express();

app.get("/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/workouts/:id", (req, res) => {

});

app.post("/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {

});

module.exports = app;
const express = require("express");
const Workout = require("../models/index.js");
const app = express();

app.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.put("/api/workouts", (req, res) => {

});

app.post("/api/workouts", (req, res) => {

});

app.get("/api/workouts/range", (req, res) => {

});

module.exports = app;
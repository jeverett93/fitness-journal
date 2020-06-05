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
//   Workout.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         title: req.body.title,
//         note: req.body.note,
//         modified: Date.now()
//       }
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
  Workout.findByIdAndUpdate(req.params.id, 
    {exercises: [
      {
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance
      }
    ]}, 
    {new: true}, (err, data) => {
      if (err) {
        res.send(err);
      }
      else {
        res.send(data);
      }
    });
});

app.post("/workouts", (req, res) => {
  let newWorkout = {
    day: req.body.day,
    exercises: [
      {
        type: req.body.type,
        name: req.body.name,
        duration: req.body.duration,
        weight: req.body.weight,
        reps: req.body.reps,
        sets: req.body.sets,
        distance: req.body.distance
      }
    ]
    
  };

  Workout.create(newWorkout)
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
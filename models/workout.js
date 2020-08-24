// requiring dependencies
const mongoose = require("mongoose");

// Defining schema
const Schema = mongoose.Schema;

// New instance of mongoose Workout document
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate()),
    required: true
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name"
      },
      duration: {
        type: Number,
        required: "Enter an exercise duration in minutes"
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

// Setting up document as a model to be used throughout application
const Workout = mongoose.model("Workout", WorkoutSchema);

// exporting model to be used in other parts of the application
module.exports = Workout;
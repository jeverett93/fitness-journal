const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate()),
    required: true
  },
  exercises: {
    type: Array
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
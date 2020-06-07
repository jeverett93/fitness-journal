// requiring dependencies
const express = require("express");
const path = require("path");
const app = express();

// slash route to serve up static index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// route that serve up public exercise.html file
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// route that serve up public stats.html file
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exporting HTML routes to be used in other parts of the application
module.exports = app;
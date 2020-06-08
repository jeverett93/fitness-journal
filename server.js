// requiring dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const app = express();
require("dotenv").config();

// specifying which port the app should use
const PORT = process.env.PORT || 3000;

// Importing HTML and API routes
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

app.use(compression());

// middleware for morgan/collecting request logs
app.use(logger("dev"));

// middleware for recognizing request object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// folder used for client
app.use(express.static("public"));

// setting up application to use API and HTML routes
app.use("/api", apiRoutes);
app.use(htmlRoutes);

// syncing database with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// setting up to alert user that port is listening successfully
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
//require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

// MongoDB
var mongoose = require("mongoose");

const url = "mongodb://localhost:27017/Restaurant";
/*mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}); */

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  family: 4
});

var db = mongoose.connection;
//const port = process.env.PORT || 8080;

// Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
  console.log("Connected to DB");
});

module.exports = app;

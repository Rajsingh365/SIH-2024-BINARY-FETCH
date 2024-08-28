const express = require("express");
const { therapyPlans } = require("./data/therapyPlans.js");
const { sessionNotes } = require("./data/sessionNotes.js");
const { progressReports } = require("./data/progressReports.js");
const { clinicalRatings } = require("./data/clinicalRating.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/therapyPlans", (req, res) => {
  res.json(therapyPlans);
});

app.get("/sessionNotes", (req, res) => {
  res.json(sessionNotes);
});

app.get("/progressReports", (req, res) => {
  res.json(progressReports);
});

app.get("/clinicalRatings", (req, res) => {
  res.json(clinicalRatings);
});

app.listen(PORT, () => {
  console.log("Listening on port : ", PORT + "...");
});

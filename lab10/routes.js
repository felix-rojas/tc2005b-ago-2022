// libraries
const express = require("express");
const app = express();

// answer to request with body
app.get("/", (req, res) => {
  res.send("This webpage is useless, no css or anything :c");
});

// GET method route
app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

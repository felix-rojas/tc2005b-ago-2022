const express = require('express');
const path = require('path');

const router = express.Router();

const winners = [];

// LOL the
router.get("/", (request, response, next) => {
    response.render(path.join('garbo.ejs'));
});

router.post("/", (request, response, next) => {
  response.render(path.join('..','views','garbage.ejs'));
});


module.exports = router;
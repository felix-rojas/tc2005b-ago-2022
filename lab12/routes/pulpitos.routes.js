const express = require('express');
const path = require('path')
const router = express.Router();

// Ruta general
router.get("/", (request, response, next) => {
    response.render(path.join('pulpo.ejs'));
});

router.post("/", (request, response, next) => {
  console.log(request.body);
});


module.exports = router;
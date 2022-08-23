const express = require('express');

const router = express.Router();
const pulpo_sitio = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8" /></head><body><h1 style="color: teal">PULPOS BAYBEE</h1></body></html>'

// LOL NO
router.get("/", (request, response, next) => {
    response.send(pulpo_sitio);
});

router.post("/", (request, response, next) => {
  console.log(request.body);
});


module.exports = router;
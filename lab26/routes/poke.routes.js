const express = require('express')
const router = express.Router()

const pokeController = require('../controllers/poke.controller');

router.get('/', pokeController.getPoke);

// define the about route
router.get('/about', (request, response) => {
  response.send('About Pokemon')
})

module.exports = router;
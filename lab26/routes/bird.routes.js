const express = require('express')
const router = express.Router()

const birdController = require('../controllers/bird.controller');

router.get('/', birdController.getBird);

router.post('/', birdController.postBird);

// define the about route
router.get('/about', (request, response) => {
  response.send('About birds')
})

module.exports = router;
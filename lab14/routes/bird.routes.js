const express = require('express')
const router = express.Router()

const birdController = require('../controllers/bird.controller');

router.get('/', (req, res) => {
    res.render('../views/birds.ejs');
  })

// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router;
const express = require('express');
const { dirname } = require('path');
const path = require('path');

const router = express.Router();

// path join is used for cross compatibility due to differences in directory handling
router.get('/info', (request, response, next) => {
    console.log(dirname); // print path to make sure it is on the right spot
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

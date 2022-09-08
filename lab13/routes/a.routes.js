const express = require('express');
const path = require('path');
const router = express.Router();

const aController = require('../controllers/a.controller');


router.get('/example', aController.action);
router.post('/example', aController.postSomething);

module.exports = router;
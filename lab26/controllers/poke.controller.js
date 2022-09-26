const path = require('path');
const Poke = require('../models/poke.model');

exports.getPoke = (request, response, next) => {
    response.render(path.join('poke', 'poke.ejs'), {
    });
};

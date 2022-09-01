const path = rquire('path');
const Equipo = require('../models/equipo.model');

exports.getEquipos = (request, response, next) => {
    Equipo.fetchAll();

    response.render
}
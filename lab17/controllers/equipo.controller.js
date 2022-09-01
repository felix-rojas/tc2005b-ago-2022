const { request } = require("http");
const path = require("path");
const Equipo = require("../models/equipo.model");

exports.getEquipos = (request, response, next) => {
  Equipo.fetchAll()
    .then(([rows, fieldData]) => {
      console.log(rows);
      response.render(path.join('equipo','../views/index.ejs')),
      {equipos: rows,
    });
    })
    .catch(err => {
        console.log(err);
        response.render(path.join('../views/error.ejs'));
    });
};

exports.postEquipo = (request, response, next) => {
    const equipo = new Equipo(request.body.nombre);
    equipo.save()
      .then(([rows, fieldData]) => {
        console.log(rows);
        response.render(path.join('equipo','../views/index.ejs')),
        {equipos: rows,
      });
      })
      .catch(err => {
          console.log(err);
          response.render(path.join('../views/error.ejs'));
      });
  };

exports.newEquipo = (request, response, next) => {
    response.render(path.join('equipo','../views/index.ejs')),
    {equipos: rows} 
// Save libraries required for creating middlewares
const path = require('path');
const bodyParser = require("body-parser");
const { request } = require("express");
const express = require("express");

const app = express(); // call constructor in the variable

// set the template engine
app.set('views-engine', 'ejs');
// set the folder for views
app.set('views', 'views');

// declare this folder as static to send the file
// everything here is public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware general response to all routes
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
// This middleware is what allows us to crete proper responses to requests
app.use((request, response, next) => {
    console.log("Middleware!");
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
  });
  
  // every time we send a response, you must tell it to go to the next middleware
  app.use((request, response, next) => {
    console.log("Otro middleware!");
    next();
  });

const rutas_garbo = require('./routes/garbo.routes');
app.use('/sample', rutas_garbo);

const rutas_pulpitos= require('./routes/pulpitos.routes');
app.use('/pulpos', rutas_pulpitos);

app.use("/hola", (request, response, next) => {
  response.send('Hola desde la ruta "/hola". Utiliza la ruta /sample para ver un ejemplo, o haz click'+'<br><br><a href= "/sample"> Regresa a sample </a>');
});

// To add routes:
app.use("/bye", (request, response, next) => {
  response.send('Bye desde la ruta "/bye"');
});

// Base Route
app.use((request, response, next) => {
    response.status(404);
    response.send('La ruta no existe :( '+'<br><br><a href= "/sample"> Regresa a sample </a>');
  });

app.listen(3000);

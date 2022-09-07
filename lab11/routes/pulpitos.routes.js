const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");

const router = express.Router();
const pulpo_sitio = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8" /></head><body><h1 style="color: teal">PULPOS BAYBEE</h1><form method="POST"><input type= "text" label="name">Insert a name to save</input><br><button name="boton" value="nombre" type="submit"></button></form></body></html>'

const submit_button = 
// Ruta general
router.get("/", (request, response, next) => {
  response.setHeader('Content-Type', 'text/html');
  response.write('<!DOCTYPE html>');
  response.write('<html lang="es-mx">');
  response.write('<head>');
  response.write('<meta charset="utf-8" />');
  response.write('<base href="https://felix-rojas.github.io/" />');
  response.write('<title>Felix Website</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('<h2>Página personal para TC2005B</h2>');
  response.write('<section id="Gustos personales">');
  response.write('<h2>Gustos personales</h2>');
  response.write('<ul>');
  response.write('<li>Filosofía política</li>');
  response.write('<li>Videojuegos</li>');
  response.write('<li>Piano</li>');
  response.write('<li>Leer</li>');
  response.write('</ul>');
  response.write('<h2>Ingresa un nombre</h2>');
  response.write('<form method = "post">');
  response.write('<label for="fname">First name:</label><br>');
  response.write('<input type="text" id="fname" name="fname"><br>');
  response.write('<input type="submit" value="Submit">');
  response.write('</form>');
  response.write('</section>');
  response.write('<h2> Package JSON </h2>');
  response.write('<p> Package JSON es el archivo que guarda la versión de las dependencias utilizadas para el desarrollo de la aplicación </p>');
  response.write('<p> El archivo establece cuaáles son las dependencias de desarrollo y las de producción. Con este archivo, se controla la versión a descargar de los archivos al utilizar el comando npm install </p>');
  response.write('<p> También nos sirve cuando queremos auditar las dependencias para asegurarnos que estén actualizados en la parte más crítica con npm audit </p>');
  response.write('</body>');
  response.write('</html>');
  response.end();
});

router.post("/", (request, response, next) => {
  console.log(request.body.fname);
  fs.writeFileSync('request.txt', request.body.fname);
  response.write('txt created');
  response.end();
});


module.exports = router;
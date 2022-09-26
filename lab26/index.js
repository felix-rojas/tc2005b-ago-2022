const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

const port = 5000;

app.set('view-engine','ejs');
app.set('views','./views');

const bird = require('./routes/bird.routes');
const poke = require('./routes/poke.routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:'false'}));

app.use('/home',(request, response) => {
    response.render('index.ejs');
  });


app.use('/birds', bird);
app.use('/pokemon', poke);


app.use('/',(request, response) => {
    response.render('error.ejs');
  });


app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })


// Mejora alguno de tus laboratorios anteriores o avanza en tu proyecto haciendo un uso pertinente de sesiones y cookies. Otra opción es que crees una nueva aplicación para que explores la aplicación de estos conceptos.

// En ocasiones, como por ejemplo para mandar mensajes de error al usuario, deseamos utilizar variables de sesión que tengan un tiempo de vida de sólo 1 petición. Estas variables se llaman flash. Si deseas utilizarlas, el paquete connect-flash lo hace sencillo.
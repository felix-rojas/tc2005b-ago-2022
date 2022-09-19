const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = 5000;

app.set('view-engine','ejs');
app.set('views','./views');

const bird = require('./routes/bird.routes');


// const cookie = require(path.join(__dirname,'/controllers/cookie.js'));


// Para manejar sesiones de manera muy práctica, instalaremos el paquete express-session.

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:'false'}));

// Para preparar el entorno para trabajar con sesiones, agregamos como middleware el manejo de sesiones:
app.use(session({
    secret: '{ajsdnasijbdasndkavjasncdmas}', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


app.use('/home',(request, response) => {
    response.render('index.ejs');
  });


app.use('/birds', bird);


app.use('/',(request, response) => {
    response.render('error.ejs');
  });


app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })


// Mejora alguno de tus laboratorios anteriores o avanza en tu proyecto haciendo un uso pertinente de sesiones y cookies. Otra opción es que crees una nueva aplicación para que explores la aplicación de estos conceptos.

// En ocasiones, como por ejemplo para mandar mensajes de error al usuario, deseamos utilizar variables de sesión que tengan un tiempo de vida de sólo 1 petición. Estas variables se llaman flash. Si deseas utilizarlas, el paquete connect-flash lo hace sencillo.
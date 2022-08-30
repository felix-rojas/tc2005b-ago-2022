const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const port = 5000;
// const cookie = require(path.join(__dirname,'/controllers/cookie.js'));

app.set('view-engine','ejs');
app.set('views','views');

app.use('/',(req, res, next) => {
    console.log('Time:', Date.now())
    res.render('index.ejs');
    next()
  });
// Para manejar sesiones de manera muy práctica, instalaremos el paquete express-session.
// Para preparar el entorno para trabajar con sesiones, agregamos como middleware el manejo de sesiones:


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:'false'}));

app.use(session({
    secret: '{ajsdnasijbdasndkavjasncdmas}', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  });

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })


// Mejora alguno de tus laboratorios anteriores o avanza en tu proyecto haciendo un uso pertinente de sesiones y cookies. Otra opción es que crees una nueva aplicación para que explores la aplicación de estos conceptos.

// En ocasiones, como por ejemplo para mandar mensajes de error al usuario, deseamos utilizar variables de sesión que tengan un tiempo de vida de sólo 1 petición. Estas variables se llaman flash. Si deseas utilizarlas, el paquete connect-flash lo hace sencillo.
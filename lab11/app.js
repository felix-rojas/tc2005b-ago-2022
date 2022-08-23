// Save libraries required for creating middlewares
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
// This middleware is what allows us to crete proper responses to requests
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

// To add routes:
app.use('/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"'); 
});

// Use body parser to insert the desired code
app.use(bodyParser.urlencoded({extended: false}));
app.use('/test', (request, response, next) => {
    console.log(request.body);
});






// launch app on port 3000
app.listen(3000);
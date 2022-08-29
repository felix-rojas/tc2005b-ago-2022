
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

const rutas_a = require('./routes/a.routes');
app.use('/example', rutas_a);

app.get('/index', (request, response, next) => {
    response.render(path.join(__dirname, 'views', 'index.ejs'));
});

app.use((request, response, next) => {
    response.status(404);
    response.send('Error 404: El recurso solicitado no existe'); //Manda la respuesta
});

app.listen(4000);
console.log("http://localhost:4000/");
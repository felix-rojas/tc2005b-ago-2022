// Save libraries required for creating middlewares
const bodyParser = require("body-parser");
const { request } = require("express");
const express = require("express");
const app = express(); // call constructor in the variable


// Middleware general response to all routes
app.use(bodyParser.urlencoded({ extended: false }));

// LOL NO
app.get("/sample", (request, response, next) => {
    response.send('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Bulma website Lab11</title><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></head><body><nav class="navbar is-dark has-shadow" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></a><a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"data-target="navbarBasicExample"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div id="navbarBasicExample" class="navbar-menu"><div class="navbar-start"><a class="navbar-item">Home</a><a class="navbar-item">Sample</a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link">More</a><div class="navbar-dropdown"><a class="navbar-item">About</a><a class="navbar-item">Jobs</a><a class="navbar-item">Contact</a><hr class="navbar-divider"><a class="navbar-item">Report an issue</a></div></div></div><div class="navbar-end"><div class="navbar-item"><div class="buttons"><a class="button is-primary"><strong>Sign up</strong></a><a class="button is-light">Log in</a></div></div></div></div></nav><section class="section"><div class="container"><h1 class="title">Sample page. Nothing here</h1></div></section><footer class="footer"><div class="content has-text-centered"><p><strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</p></div></footer></body></html>');
});

app.post("/sample", (request, response, next) => {
  console.log(request.body);
});

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

// To add routes:
// Each route has exclusively one response
// Routes have to be organized: subdirectories FIRST, bigg directory last

app.use("/hola", (request, response, next) => {
  response.send('Hola desde la ruta "/hola". Utiliza la ruta /sample para ver un ejemplo');
});

// To add routes:
app.use("/bye", (request, response, next) => {
  response.send('Bye desde la ruta "/bye"');
});

// Base Route
app.use((request, response, next) => {
    response.send('Hola desde la ruta base');
  });



// launch app on port 3000
app.listen(3000);

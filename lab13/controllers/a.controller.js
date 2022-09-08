const { request } = require('http');
const path = require('path');
const miListaNombres = require('../models/a.model');

const miLista = new miListaNombres('Un ejemplo');

exports.action = (request, response, next) => {
    response.render(path.join(__dirname,'..','views','something.ejs'), {data : miLista});
};

exports.postSomething = (request,response,next) => {
    console.log(request.body.form)
    response.render(path.join(__dirname,'..','views','something.ejs'), request.body);
};
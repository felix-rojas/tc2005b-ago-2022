const { request } = require('http');
const path = require('path');
const Winner = require('../models/a.model')

exports.action = (request, response, next) => {
    response.render('view_file', { 
        atribute_1: 'Data 1', 
        atribute_2: 'Data 2'
    });
};

exports.postSomething = (request,response,next) => {
    response.sendFile(path.join(__dirname,'..','views','something.html'))
};
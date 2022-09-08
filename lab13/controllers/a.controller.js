const bodyParser = require('body-parser');
const { on } = require('events');
const path = require('path');
const myList = require('../models/a.model');

let userList = new myList(Date.now());

exports.action = (request, response, next) => {
    response.render(path.join(__dirname,'..','views','something.ejs'), {names : myList.fetchAll()});
    console.log(myList.fetchAll());
};

exports.postSomething = (request,response,next) => {
    if (request.method === 'POST'){
        userList.save(request.body.user_input);
        response.render(path.join(__dirname,'..','views','something.ejs'), {names: myList.fetchAll()});
        console.log(myList.fetchAll());
    } 
};
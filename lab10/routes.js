// libraries
const http = require("http");
const file = require("fs")
const bodyParser = require("body-parser");
const url = require("url")


sample_site = file.readFileSync("./sample.html");
index_site = file.readFileSync("./index.html");
lab1_site = file.readFileSync("./lab1.html");



const server = http.createServer(function (request, response) {
    if (request.url === "/index") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(index_site); 
        response.end();
    } else if (request.url === "/lab1") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(lab1_site); 
        response.end();
    } else if (request.url === "/sample") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(sample_site); 
        response.end();
    } else if (request.url === "/sample" && request.method === "POST") {
        function ShowMe() {
        }
        let inputs_usuario = document.getElementById("user_inputs");
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write('<h2>'+ inputs_usuario +'</h2>')
        response.end();
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>Error 404</h1></br>");
        response.write("<p>La página no existe :(</p>");
        response.end();
    }
})


console.log("Opening port on 3100");
server.listen(3100);

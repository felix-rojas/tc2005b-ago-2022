// libraries
const http = require("http");
const file = require("fs")
const bodyParser = require("body-parser");
const url = require("url")


sample_site = file.readFileSync("./sample.html");

const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(sample_site); 
    response.end();
})


console.log("Opening port on 3100");

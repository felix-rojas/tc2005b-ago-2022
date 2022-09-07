// libraries
const http = require("http");
const file = require("fs")
const url = require("url")

sample_site = file.readFileSync("./sample.html");
index_site = file.readFileSync("./index.html");
lab1_site = file.readFileSync("./lab1.html");

const server = http.createServer((request, response) => {
    if (request.url === "/index") {
        response.setHeader('Content-Type', 'text/html');
        response.write(index_site);
        file.writeFileSync('test1.txt', 'Direccion Hola FUNCIONA');
        response.end();
    } else if (request.url === "/sample") {
        response.setHeader('Content-Type', 'text/html');
        response.write(sample_site);
        file.writeFileSync('site_that_loaded', sample_site);
        response.end();
    } else if (request.url === "/lab1" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx">');
        response.write('<head>');
        response.write('<meta charset="utf-8" />');
        response.write('<base href="https://felix-rojas.github.io/" />');
        response.write('<title>Felix Website</title>');
        response.write('</head>');
        response.write('<body>');
        response.write('<h2>Página personal para TC2005B</h2>');
        response.write('<section id="Gustos personales">');
        response.write('<h2>Gustos personales</h2>');
        response.write('<ul>');
        response.write('<li>Filosofía política</li>');
        response.write('<li>Videojuegos</li>');
        response.write('<li>Piano</li>');
        response.write('<li>Leer</li>');
        response.write('</ul>');
        response.write('<h2>Ingresa un nombre</h2>');
        response.write('<form method = "post">');
        response.write('<label for="fname">First name:</label><br>');
        response.write('<input type="text" id="fname" name="fname"><br>');
        response.write('<input type="submit" value="Submit">');
        response.write('</form>');
        response.write('</section>');
        response.write('<h2>Repositorio del curso</h2ls.com/photos/416160/pexels-photo-416160.jpeg" alt="Sleepy cat lying upside down" width="388px" height="auto"/>');
        response.write('</body>');
        response.write('</html>');
        file.writeFileSync('test3.txt', 'Esta es la direccion lab1');
        response.end();
        
    } else if (request.url === "/lab1" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            datos.push(dato);
            file.writeFileSync('test-post.txt', dato);
    });
    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        response.setHeader('Content-Type', 'text/html');
        response.write("<!DOCTYPE html>");
        response.write('<head><meta charset="UTF-8"></head>');
        response.write("<h1>El resultado es: </h1>");
        response.write('<h2>' + datos_completos + '</h2>');
        return response.end();
    });
    } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write("<!DOCTYPE html>");
    response.write('<head><meta charset="UTF-8"></head>');
    response.write("<h1>Error 404</h1></br>");
    response.write("<p>La página no existe :(</p>");
    response.end();
}

});


console.log("Opening port on 3100");
server.listen(3100);

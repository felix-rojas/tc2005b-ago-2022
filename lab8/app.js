const filesystem = require("fs"); // handle files and paths
const http = require("http");

function average(arreglo_a_promediar) {
    let sum = 0;
    let count = 0;
    for (let item of arreglo) {
        sum += item;
        count += 1;
    }
    return sum / count;
}

const arreglo = [222, 123, 444, 5000];
const promedio = average(arreglo);
const escrito_a_pasar = "Did you know Ajax detergent was named after Ajax the warrior who cleaned Greece. Like grease on a plate. God im so funny."


// carga sitio web de un txt
const sitio_a_cargar = filesystem.readFileSync('./materialize/home.txt');

// we have not set a response, so it throws an empty body
const server = http.createServer((request, response) => {
    console.log(http.request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Hee hoo, heres your petition :)</h1>");
    response.write("<p>"+promedio+"</p>");
    response.write("<p>"+escrito_a_pasar+"</p>");
    response.write(sitio_a_cargar); //LOL no hagan eso
    response.end();
});


// cannot create directory, use the function to make directory
filesystem.writeFileSync("./media/hello.txt", "Im writing this on node!");


const texto = "El promedio del arreglo definido es: "+promedio;
filesystem.writeFileSync("./answer.txt", texto);

console.log("Hello im in node");

server.listen(3100);

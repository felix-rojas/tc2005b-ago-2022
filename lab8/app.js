const filesystem = require("fs"); // handle files and paths
const http = require('http');

// we have not set a response, so it throws an empty body
const server = http.createServer( (request, response) => {
    console.log(http.request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Hee hoo, heres your petition :)</h1>')
    response.end();
});

// cannot create directory, use the function to make directory
filesystem.writeFileSync("./media/hello.txt", "Im writing this on node!");

console.log("Hello im in node");

const arreglo = [222, 123, 444, 5000];

// sort array with timer (awful lmao, dont)
for (let item of arreglo) {
  setTimeout(() => {
    console.log(item);
  }, item);
}

function average(arreglo_a_promediar) {
  let sum = 0;
  let count = 0;
  for (let item of arreglo) {
    sum += item;
    count += 1;
  }
  return sum/count;
}

console.log("El promedio es: "+average(arreglo));

server.listen(3100);
// ----------------------------------------------------------------------- //
// Entrada: un número pedido con un prompt.
// Salida: Una tabla con números del 1 al número dado con sus cuadrados y cubos.
// ----------------------------------------------------------------------- //
function tablaNums(n) {
//   const header1 =
//   '<table><tr><th colspan=';
//   const colspan_size = n;
//   const header2 = '>Numero, Cuadrados, Cubos</th></tr>'
//   let header = header1+colspan_size+header2;
//   document.write(header);

  document.write('<table>');
  for (let column = 1; column <= 3; column++) {
    document.write("<tr>");
    document.write('<td><b>n'+'<sup>'+column+'</sup></b>');
    for (let index = 1; index <= n; index++) {
      document.write("<td>" + (Math.pow(index, column)) + "</td>");
    }
    document.write("</tr>");
  }
  document.write('</table>');
}

// ----------------------------------------------------------------------- //
// TABLA - VIEWER 3000
// ----------------------------------------------------------------------- //
let tabla = 0;
document.getElementById("tabla_potencias").innerHTML = tablaNums(tabla);

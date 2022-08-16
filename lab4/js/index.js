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
const tabla = document.getElementById("tabla");
tabla.onsubmit = () => {
  document.getElementById("tabla_potencias").innerHTML = tablaNums();
};

// ----------------------------------------------------------------------- //
// PULPO - VIEWER 3000
// ----------------------------------------------------------------------- //
const boton = document.getElementById("pulpo");
boton.onclick = () => {
  document.getElementById("contenedor_imagen").innerHTML =
    '<img src ="https://ichef.bbci.co.uk/news/640/cpsprodpb/7E5E/production/_122305323_1920xgettyimages-1136409408.jpg" alt="Imagen de pulpo nadando en el mar con movimientos dinámicos oscilatorios">';
};

// ----------------------------------------------------------------------- //
// THIS BLOCK IS JUST HERE FOR REFERENCE, USELESS AND PESTERING OTHERWISE //
// ----------------------------------------------------------------------- //
// // functions
// function check_answer() {
//     const numero_pulpo_perfecto = 1;
//     let answer = window.prompt("¿Cuántos pulpos perfectos existen?");
//     if (answer == numero_pulpo_perfecto) {
//         alert("RESPUESTA CORRECTA");
//     } else {
//         alert("SOLAMENTE EXISTE UN PULPO PERFECTO");
//     }
// }

// // funciones anónimas
// () => console.log("anonymous");

// // funciones anónimas asignada a variables
// const anon = () => console.log("anonymous");

// // var, const, console (log, info , warn, error)
// // variable local (block-scoped local)
// let pulpo = "Paul";

// // variable (local)
// var pulpo_cantor = "Timothy";

// // variable (const)
// const pulpo_perfecto = "Perfec-pulpo es inmutable y único, por tanto: perfecto";

// // Arrays, etc.
// const menu = ["Papas", "Sopa de papa"];
// console.log(menu);
// menu.length = 3; // crece el arreglo y lo llena con <no element>
// console.log(menu);
// menu.length = 1; // corta el arreglo
// console.log(menu);

// // Associative arrays (similar to a dictionary)
// const menuNuevo = ["Papas", "Sopa de papa"];
// menu["postre"] = "Papa dulce";
// console.log(menu);

// // console function to print value assigned to prototype
// console.log(pulpo);
// console.log(pulpo_cantor);

// for (let i = 0; i < 10; i++) {
//   console.log(pulpo_cantor + " canta " + i);
// }

// // console.log(i);
// // alerts, prompts, confirms

// window.alert("ACCESANDO A PULPOS.HTML");
// check_answer();
// console.log(pulpo_perfecto);
// console.info("Perfec-Pulpo es inmutable");
// console.warn("QUITA LOS LOGS");
// console.assert(2 === 2);

// console.error("I am actually not an error");

// anon();

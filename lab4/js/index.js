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

  document.write("<table>");
  for (let column = 1; column <= 3; column++) {
    document.write("<tr>");
    document.write("<td><b>n" + "<sup>" + column + "</sup></b>");
    for (let index = 1; index <= n; index++) {
      document.write("<td>" + Math.pow(index, column) + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

// ----------------------------------------------------------------------- //
// TABLA - VIEWER 3000
// ----------------------------------------------------------------------- //
let tabla = 0;
document.getElementById("tabla_potencias").innerHTML = tablaNums(tabla);

// ----------------------------------------------------------------------- //
// Ejercicio 2
// Entrada: Usando un prompt, pide el resultado de la suma de 2 números
// generados de manera aleatoria.
// Salida: La página debe indicar si el resultado fue correcto o incorrecto
//  y el tiempo que tardó el usuario en escribir la respuesta.
// ----------------------------------------------------------------------- //

function preguntaEjer2() {
  const start = Date.now();
  const num1 = Math.floor((Date.now() * Math.random()) % 100);
  const num2 = Math.floor((Math.random() * 100) % 100);

  let answer = window.prompt("¿Cuánto es " + num1 + "+" + num2 + "?");

  while (answer != num1 + num2) {
    answer = window.prompt("¿Cuánto es " + num1 + "+" + num2 + "?");
  }
  const end = Date.now();
  window.alert(
    "Correct! it took you " + (end - start) / 1000 + " seconds to answer"
  );
}

preguntaEjer2();

// ----------------------------------------------------------------------- //
// Ejercicio 3
// Parámetros: Un arreglo de números.
// Regresa: La cantidad de números negativos en el arreglo,
// la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
// ----------------------------------------------------------------------- //

function contadorArreglo(unArreglodeNumeros) {
  let negativos = 0;
  let positivos = 0;
  let ceros = 0;
  for (let number in unArreglodeNumeros) {
    if (number > 0) {
      positivos++;
    } else if (number < 0) {
      negativos++;
    } else if (number == 0) {
      ceros++;
    }
  }
  return [negativos, ceros, positivos];
}

const arregloNums = [-12, -12, 0, -1];
const respuesta3 = contadorArreglo(arregloNums);
console.log("Positivos: " + respuesta3[0]);
console.log("Ceros: " + respuesta3[1]);
console.log("Negativos: " + respuesta3[2]);

// ----------------------------------------------------------------------- //
// Ejercicio 4
// Parámetros: Un arreglo matricial de números.
// Regresa: Un promedio de cada renglón
// ----------------------------------------------------------------------- //

const row1 = [1, 2, 3];
const row2 = [4, 5, 6];
const row3 = [1, 5, 8];

let matriz = [row1, row2, row3];

console.log(matriz);

function promedios(matrix_2d) {
  let averages = [];
  let accum;
  for (let fila = 0; fila < matrix_2d.length; fila++) {
    accum = 0;
    for (let col = 0; col < matrix_2d[fila].length; col++) {
      accum += matrix_2d[fila][col];
    }
    averages.push(accum/matrix_2d[fila].length);
  }
  return averages;
}

console.log(promedios(matriz));

// ----------------------------------------------------------------------- //
// Ejercicio 5
// Parámetros: Un entero
// Regresa: Secuencia regresiva
// ----------------------------------------------------------------------- //

numerillo = 12;
function inverso(numero_entero) {
  while (numero_entero !== 0) {
    console.log(numero_entero);
    numero_entero--;
  }
}

inverso(numerillo);

// ----------------------------------------------------------------------- //
// Ejercicio 6
// Parámetros: 2 números+
// ----------------------------------------------------------------------- //


// Constructor
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    if (denominator == 0) {
      console.error("Denominator cannot be 0, defaulting to 1");
      this.denominator = 1;
    } else {
      this.denominator = denominator;
    }
  }
  floatingEquivalent() {
    return this.numerator/this.denominator;
  }
  print() {
    return (""+this.numerator+"/"+this.denominator)
  }
};

un_cuarto = new Fraction(1,4);

console.log(un_cuarto.print());
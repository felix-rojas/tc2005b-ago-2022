// functions
function check_answer() {
    const numero_pulpo_perfecto = 1;
    let answer = window.prompt("¿Cuántos pulpos perfectos existen?");
    if (answer == numero_pulpo_perfecto) {
        alert("RESPUESTA CORRECTA");
    } else {
        alert("SOLAMENTE EXISTE UN PULPO PERFECTO");
    }
}

// funciones anónimas
() => console.log("anonymous");

// funciones anónimas asignada a variables
const anon = () => console.log("anonymous");


// var, const, console (log, info , warn, error)
// variable local (block-scoped local)
let pulpo = "Paul";

// variable (local)
var pulpo_cantor = "Timothy";

// variable (const)
const pulpo_perfecto = "Perfec-pulpo es inmutable y único, por tanto: perfecto";


// console function to print value assigned to prototype
console.log(pulpo);
console.log(pulpo_cantor);

for (let i = 0; i < 10; i++) {
  console.log(pulpo_cantor + " canta " + i);
}

// console.log(i);
// alerts, prompts, confirms

window.alert("ACCESANDO A PULPOS.HTML");
check_answer();
console.log(pulpo_perfecto);
console.info("Perfec-Pulpo es inmutable");
console.warn("QUITA LOS LOGS");
console.assert(2 === 2);

console.error("I am actually not an error");

anon();
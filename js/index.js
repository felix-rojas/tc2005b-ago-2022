// var, const, console (log, info , warn, error)

// variable local (block-scoped local)
let pulpo = "Paul";

// variable (local)
var pulpo_cantor = "Timothy";

// variable (const)
const pulpo_perfecto = "Perfec-pulpo es inmutable y único, por tanto: perfecto"
const numero_pulpo_perfecto = 1;

// console function to print value assigned to prototype
console.log(pulpo);
console.log(pulpo_cantor);

for (let i = 0; i < 10; i++){
    console.log(pulpo_cantor + " canta " + i);
}

// console.log(i);

console.log("¿Cuántos pulpos perfectos hay?");
console.log(numero_pulpo_perfecto);
console.log(pulpo_perfecto);
console.info("Perfec-Pulpo es inmutable");
console.warn("QUITA LOS LOGS");
console.error("I am actually not an error");
console.assert(1 === 2);
const mySet = new Set([1, 2, 3, 4, 5]);

console.log(mySet);
console.log("---¿Esta el numero 3?---");
console.log(mySet.has(3));

console.log("---Eliminar el num 4---");
mySet.delete(4);
console.log(mySet);

console.log("---Pasar el set a Arreglo---");
let conjunt = [...mySet];
console.log(conjunt);

console.log("---Crear otro Set---");
const otherSet = new Set([4, 5, 6, 7]);
console.log(otherSet);

console.log("---Union de los dos conjuntos---");
const unionSet = new Set([...mySet, ...otherSet]);
console.log(unionSet);

console.log("---Elementos Comunes---");
const comunElements = [...mySet].filter(element => otherSet.has(element));
console.log(comunElements);

console.log("---Elementos Diferentes---");
const diffElements = [...mySet].filter(element => !otherSet.has(element));
console.log(diffElements);






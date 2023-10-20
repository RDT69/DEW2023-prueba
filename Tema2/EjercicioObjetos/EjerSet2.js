/*Crea una función que recibe 3 parámetros (min, max, num) todos ellos enteros y devuelve un array de num elementos que 
son números elegidos al azar entre min y max pero que nunca se repiten. Por supuesto num no puede ser mayor que max - min.*/ 

function nums(min,  max,  num) {
    let arr = new Array();

    if(min > max){
        console.log("Error no se puede ejecutar la funcion.");
    } else {
        for (let i = 0; i < num; i++) {
            let n = parseInt(Math.random() * (max * min) + min);
            arr.push(n);           
        }
        
    }
    console.log(arr);
    const mySet = new Set(arr)
    return mySet;
}
console.log(nums(10, 1, 5 ));
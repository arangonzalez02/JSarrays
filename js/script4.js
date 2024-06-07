// //para insertar al final del array un elemento
// //push -> nombreArray.push(elementoNuevo)

// let equipos = ["Atlético", "Girona", "Barcelona", "R.Madrid", "Villarreal", "Athletic", "Real Sociedad", "Betis", "Sevilla", "Celta"];
// equipos.push("Tomelloso");
// console.log(equipos);
// //insertar al principio....
// equipos.unshift("Alcázar de San Juan");


/*
    ACTIVIDAD PROUPUESTA 3.5

    Una aplicaciónde analisis de datos en la que estás trabajando necesita crear una estructura que almacene 10 múltiplos de 5 aleatoriosde 0 a 100. Además, ni el primer elemento puede ser menor de 50, ni el último mayor de 50.
    
    Se pide que resuelvas el problema siguiendo estos pasos:
    - Crea un array de 10 elementos.
    - Inicializa el array con múltiplos aleatorios de 5.
    - Si el primer elemento es menor de 50, debes eliminarlo e insertar otro múltiplo de 5 aleatorio. Esta operación debes realizarla hasta que el primer elemento sea mayor o igual que 50.
    - Si el último elemento es mayor de 50, debes eliminarlo e insertar otro múltiplo de 5 aleatorio. Esta operación debes realizarla hasta que el último elemento sea menor o igual que 50.
    - Muestra el contenido del array en pantalla y comprueba que se cumplen todos los resquitos.
*/


let arrayM = new Array(10);


for (let i = 0; i < arrayM.length; i++) {
    let numero = parseInt(Math.random()*21)*5;
    arrayM[i] = numero;
}
console.log(arrayM);

while (arrayM[0] < 50) {
    let multiploN = parseInt(Math.random()*21)*5;
    arrayM.shift();
    arrayM.unshift(multiploN);
    
}

console.log(arrayM);


while (arrayM[9] > 50) {
    let multiploN = parseInt(Math.random()*21)*5;
    arrayM.pop();
    arrayM.push(multiploN);
    
}

console.log(arrayM);
/*
    ACTIVIDAD PROPUESTA 3.3

    Crear un array con 100 valores aleatorios y mostrar solo los pares.
    Utilizar el recorrido con for-in
*/
let array = new Array(100);

//para crear el array utilizamos el for-i
for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(Math.random() * 1000 + 1);
}
//para mostrar el array y valorar si es par, utilizamos el for-in

for (let indice in array) {
    if (array[indice] % 2 == 0) {
        console.log(`Número par en el índice ${indice} con valor ${array[indice]}`);
    }
}

//
let arrayMascotas = ["Perro", "Gato", "Tortuga"];
//recorrer el array mascotas con el for of
for (let mascotas of arrayMascotas) {
    console.log(mascotas);
}


let matriz = [[5, 58, 9], [7, 8, 2], [5, 7, 9], [8, 4, 9]];
console.log(matriz.length);//nos trae las filas
//recorrer el array bidimensional de otra manera
for (let f = 0; f < matriz.length; f++) {//lo va a recorrer 4
    for (let c = 0; c < matriz[f].length; c++) {
        console.log(`Valor de la fila ${f} y columna ${c} es ${matriz[f][c]}`);
    }
}


/*
    ACTIVIDAD RESUELTA 3.2
    Crear un Array 3x3, asignarle valores y mostrar la diagonal principal
*/
let arrayD = new Array(3);
for (let f = 0; f < arrayD.length; f++) {
    arrayD[f] = new Array(3);
    for (let c = 0; c < arrayD[f].length; c++) {
        arrayD[f][c] = Math.floor(Math.random() * 100 + 1);
        document.getElementById("d" + f + c).innerHTML = arrayD[f][c];
        if (f == c) {
            document.getElementById("d" + f + c).innerHTML = arrayD[f][c];
            document.getElementById("d" + f +c).style.color="red";
        }
    }
}
console.log(arrayD);


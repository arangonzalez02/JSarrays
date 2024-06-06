/*
    ACTIVIDAD PROPUESTA 3.3

    Crear un array con 100 valores aleatorios y mostrar solo los pares.
    Utilizar el recorrido con for-in
*/
let array=new Array(100);

//para crear el array utilizamos el for-i
for (let i = 0; i < array.length; i++) {
    array[i]=parseInt(Math.random()*1000+1);
}
//para mostrar el array y valorar si es par, utilizamos el for-in

for (let indice in array) {
    if (array[indice]%2==0) {
        console.log(`Número par en el índice ${indice} con valor ${array[indice]}`);
    }
}

//
let arrayMascotas=["Perro", "Gato", "Tortuga"];
//recorrer el array mascotas con el for of
for (let mascotas of arrayMascotas) {
    console.log(mascotas);
}
//Liga Local de fútbol
//Quieres crear una estructura de datos que almacene la tabla de clasificación de una liga local de fútbol con estos datos:
//La liga la disputan 10 equipos
//Para cada equipo necesitas los datos  Nombre / Puntos / Partido jugados, ganados, empatados y perdidos / Goles a favor y goles en contra
//Crea la estructura de datos que consideres más útil, rellénala con datos coherentes y muestra en pantalla toda la información de la clasificación del equipo ganador.

let equipos = ["Real Madrid", "Girona", "Barcelona", "Atletico", "Villareal", "Athletic", "Real Sociedad", "Betis", "Sevilla", "Celta"];//NOMBRE
let datosEquipo = [[87, 26, 598, 368, 67, 4], [85, 46, 484, 406, 75, 1], [79, 44, 595, 412, 85, 2], [70, 43, 481, 438, 82, 5], [65, 65, 469, 488, 102, 8], [61, 37, 463, 511, 75, 5], [51, 39, 461, 604, 98, 2], [48, 45, 492, 429, 85, 3], [48, 54, 490, 477, 108, 4], [46, 57, 472, 462, 62, 5]];
let equipoGanador = 0;
for (let i = 0; i < datosEquipo.length; i++) {
    if (datosEquipo[i] > datosEquipo[equipoGanador][0]); //se comparan los datos de la columna 0 que es la de los puntos de cada uno y se almacenan los puntos más altos en la variable equipoGanador
    equipoGanador = i;
}
//una vez definido todo, lo muestro en una tabla en front
let tabla = document.querySelector("table");
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    fila.setAttribute("id", String("fila" + index));
    tabla.appendChild(fila);



    let columnaNombre = document.createElement("td");
    columnaNombre.textContent =equipos[index];
    fila.appendChild(columnas);

    for (let c = 0; c < datosEquipo[index].length; c++) { //se pone menor e igual  porque sino la última fila no se completaría
        let columnas = document.createElement("td");
        columnas.textContent=datosEquipo[index][c];
        fila.appendChild(columnas);
    }
}

let equipoGanadorElemento=document.getElementById("equipoGanador");
equipoGanadorElemento.textContent = equipos[equipoGanador];


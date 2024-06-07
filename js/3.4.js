// Datos de los equipos y sus estadísticas
let equipos = ["Atlético", "Girona", "Barcelona", "R.Madrid", "Villarreal", "Athletic", "Real Sociedad", "Betis", "Sevilla", "Celta"];
let datosEquipo = [
    [87, 598, 368, 67, 4, 0],
    [85, 484, 406, 75, 1, 0],
    [79, 595, 412, 85, 2, 0],
    [70, 481, 438, 82, 5, 0],
    [65, 469, 488, 102, 8, 1],
    [61, 463, 511, 75, 5, 0],
    [51, 461, 604, 98, 2, 0],
    [48, 492, 429, 85, 3, 0],
    [48, 490, 477, 108, 4, 0],
    [46, 472, 462, 62, 5, 0]
];

// Encontrar el equipo ganador (el que tiene más puntos)
let equipoGanador = 0;

for (let i = 1; i < datosEquipo.length; i++) {
    if (datosEquipo[i][0] > datosEquipo[equipoGanador][0]) { // Comparar los puntos de cada equipo
        equipoGanador = i;
    }
}

// Mostrar todos los equipos y sus datos en una tabla en el front
let tabla = document.querySelector("table");

// Crear filas para cada equipo
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    
    if (index === equipoGanador) {
        fila.style.fontWeight = "bold"; // Resaltar el equipo ganador
    }
    tabla.appendChild(fila);

    // Agregar nombre del equipo
    let columnaNombre = document.createElement("td");
    columnaNombre.textContent = equipos[index];
    fila.appendChild(columnaNombre);

    // Agregar estadísticas del equipo
    for (let c = 0; c < datosEquipo[index].length; c++) {
        let columna = document.createElement("td");
        columna.textContent = datosEquipo[index][c];
        fila.appendChild(columna);
    }
}

// Mostrar la información del equipo ganador en el elemento con id "equipoGanador"
let equipoGanadorElemento = document.getElementById("equipoGanador");
equipoGanadorElemento.textContent = equipos[equipoGanador];
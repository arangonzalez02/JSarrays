//variables -> nombre, utiliza un espacio de memoria para guardar un valor

let alumno1 = "Juan Pérez";
let alumno2 = "Marina Torres";
//.......para estructura de datos -> se guardan en memoria como las variables
// se utilizan ARRAYS

//declaración de un Array
let profesores = new Array(); //declarando la estructura de un array sin valores
let alumnos = ["Juan Rodriguez", "Marina Torres", "Dani Lopez", "Tania Pinero", "Sergio Castro"]; // 0 , 1 , 2 , 3 , 4 , 5 , 6
alumnos[5] = "Arantxa González";
console.log(alumnos[3]);
console.log(alumnos);
//reemplazar un valor de en posición específica, con invocarlo se puede cambiar.
alumnos[5] = "Arantxa González García"
console.log(alumnos);

/*
    *ACTIVIDAD RESUELTA 3.1
    Crear un Array com 6 localidades y mostrar solo las de posiciones impares
*/

let localidades = ["Alcázar de San Juan", "Argamasilla de Alba", "Mota del Cuervo", "Cinco Casas", "Quintanar de la Orden", "Tomelloso"];
let indice = 0;
//para conocer en programación JS la longitud (numero de elementos) de un array, utilizamos el nombreArray.legth
while (indice < localidades.length) { //cuanto de largo es la lista
    if (indice % 2 != 0) { //si indice dividido entre dos, el resto es diferente a 0, el índice es impar
        console.log(localidades[indice]); //se muestra la localidad de
    } indice++;
}

/*
    RECORRER TODO EL ARRAY LOCALIDADES
*/
for (let index = 0; index < localidades.length; index++) {
    console.log(`Localidad ${index}-> ${localidades[index]}`);

}
//REPASAR FOR ANIDADOS

//Crear un Array Bidimensionales ....valores random del 1 al 10 (Notas);
//Crear 5 filas y 4 columnas   ¿QUE RESULTARÍA DE ESTO?
let arrayFC = new Array(5); //HACE 5 FILAS

for (let i = 0; i < 5; i++) {
    arrayFC[i] = new Array(4); //HACE 4 COLUMNAS A LA i
    for (let y = 0; y < 4; y++) {
        arrayFC[i][y] = parseInt(Math.random() * 10);
    }
}
console.log(arrayFC);


/*
    CREAR UN CUADRO (div) Y UN DESPLEGABLE, ESTE INDICA LOS COLORES Y SEGÚN SELECCIONES...VA AL ARRAY CON EL ÍNDICE Y CAMBIA EL COLOR....
*/

let coloresRGB = ["#f39c12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];
let nombreRGB = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];
let colores = document.querySelector("#colores");
for (let i = 0; i < nombreRGB.length; i++) {
    let opcion = document.createElement("option");//creamos el option del select que tenemos en el HTML
    //le indico con textContent que muestra en el select por cada opción
    opcion.textContent = nombreRGB[i];
    //Se le agrega atributos
    opcion.setAttribute("value", i);
    colores.appendChild(opcion);
}
let contenedor = document.querySelector(".container");
//escuchamos el evento de cambio dentro del select para que cambie el color de fondo
colores.addEventListener("change", function () {

    contenedor.style.backgroundColor = "";
    contenedor.style.border = "";
    contenedor.style.borderRadius = "";

    if (colores.value == "") {
        contenedor.style.backgroundColor = "black";
        contenedor.style.border = "4px solid red";
        contenedor.style.borderRadius = "50px";

    } else {
        contenedor.style.backgroundColor = coloresRGB[colores.value];
        contenedor.style.border = "4px solid red";
        contenedor.style.borderRadius = "35px";
        //si se selecciona el option de value=""...dale color y forma
    }


}
);






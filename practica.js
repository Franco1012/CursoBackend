/*let personas = [
    { id: 1, nombre: "Juan", edad: 30, apellido: "Pérez" },
    { id: 2, nombre: "María", edad: 25, apellido: "García" },
    { id: 3, nombre: "Pedro", edad: 35, apellido: "López" },
    { id: 4, nombre: "Ana", edad: 40, apellido: "Martínez" },
    { id: 5, nombre: "Luis", edad: 20, apellido: "Rodríguez" }
];

let person=personas.find((persona)=>persona.id===3)


console.log(person);*/

// Definimos una función llamada "saludar"
function saludar(nombre) {
    /*console.log("Hola " + nombre);*/
}

// Agregamos una propiedad llamada "idioma" a la función
saludar.idioma = "español";

// Llamamos a la función y usamos la propiedad "idioma"
saludar("Juan");
/*console.log("El idioma de la función es: " + saludar.idioma);*/ // Accedemos a la propiedad "idioma" utilizando la notación de punto
console.log(saludar);

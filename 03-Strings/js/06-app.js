// Repeat Te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);
 


// Split
const actividad = 'Estoy abcd aprendiendo abcd Javascript abcd Moderno';
console.log(actividad.split("abcd"));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const actividad2 = 'EstoyabcdaprendiendoabcdJavascriptabcdModerno';
const array2 = actividad2.split("abcd");
const object = {};

for (let index = 0; index < array2.length; index++) {
    object[index] = array2[index];
}

console.log(object);


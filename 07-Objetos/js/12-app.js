//Object Literal

const producto = {
    nombre: "Mesa",
    precio: 200,
    disponible: true,
}

//Object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto1 = new Producto("Carro",400);
console.log(producto1);

const producto2 = new Producto("Moto",700);
console.log(producto2);
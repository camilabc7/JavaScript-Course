// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
        pais: "china",
    }
  },
};

const { nombre, informacion, informacion: { medidas: { peso}, fabricacion: { pais} }, } = producto;

console.log(nombre);
console.log(informacion);
console.log(peso);
console.log(pais);


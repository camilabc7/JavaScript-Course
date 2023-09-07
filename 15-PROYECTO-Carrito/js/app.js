//Variables
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const eliminarCursoCarritoBtn = document.querySelector("#borrar-curso");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
  //Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener("click", agregarCurso);

  //Elimina cursos del carrito
  carrito.addEventListener("click",eliminarCurso);

  //Vaciar carrito
  carrito.addEventListener("click", vaciarCarrito);

}

//Funciones
function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

//Leer el contenido del HTML al que le dimos click y extraer información del curso
function leerDatosCurso(curso) {
  //Crear objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Revisa si elemento ya existe en el carrito

  const existe = articulosCarrito.some((curso) => {
    if (curso.id === infoCurso.id) {
      return true;
    } else {
      return false;
    }
  });
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  } else {
    //Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  generarCarritoHTML();
}

//Muestra el carrito de compras en el HTML

function generarCarritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  //Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, precio, titulo, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>
               <img src=${imagen} width="100"> 
          </td>
          <td>${precio}</td>
          <td>${titulo}</td>
          <td>${cantidad}</td>
          <td>
               <a href="#" class="borrar-curso" data-id="${id}">X</a>
          </td>
          `;

    contenedorCarrito.appendChild(row);


  });
}

//Eliminar los cursos del tbody para que no se dupliquen por el appendChild
function limpiarHTML() {
  //forma lenta
  // contenedorCarrito.innerHTML="";

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

function eliminarCurso(e) {
  if(e.target.classList.contains("borrar-curso")){
    const cursoId = e.target.getAttribute("data-id");

    //Eliminar del arreglo de articulos carrito por el data-id

    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

    generarCarritoHTML();
  }
}

function vaciarCarrito(e){
  if(e.target.id==="vaciar-carrito"){
    articulosCarrito=[];
    generarCarritoHTML();
  }
}

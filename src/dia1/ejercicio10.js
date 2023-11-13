// Función 1: Crear encabezado
function crearEncabezado(texto) {
  const encabezado = document.createElement("h1");
  encabezado.textContent = texto;
  document.body.appendChild(encabezado);
}

// Función 2: Crear párrafo
function crearParrafo(texto) {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.body.appendChild(parrafo);
}

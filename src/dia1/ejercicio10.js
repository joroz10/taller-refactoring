function crearEncabezado(texto) {
  const encabezado = document.createElement("h1");
  encabezado.textContent = texto;
  document.body.appendChild(encabezado);
}

function crearParrafo(texto) {
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  document.body.appendChild(parrafo);
}

function crearLista(texto) {
  const list = document.createElement("li");
  list.textContent = texto;
  document.body.appendChild(list);
}

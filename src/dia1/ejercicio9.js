// Función 1: Calcular el precio total de productos con descuento
function calcularPrecioTotalConDescuento(productos) {
  let precioTotal = 0;

  for (let i = 0; i < productos.length; i++) {
    const precioConDescuento =
      productos[i].precio * (1 - productos[i].descuento);
    precioTotal += precioConDescuento;
  }

  return precioTotal;
}

// Función 2: Calcular el precio total de productos sin descuento
function calcularPrecioTotalSinDescuento(productos) {
  let precioTotal = 0;

  for (let i = 0; i < productos.length; i++) {
    precioTotal += productos[i].precio;
  }

  return precioTotal;
}

const CANARIAS_IVA = 1.07;
const PENINSULA_IVA = 1.21;

function calcularPrecioConIVA(precioSinIVA, lugar) {
  if (lugar === "peninsula") {
    return precioSinIVA * CANARIAS_IVA;
  } 
  if (lugar === "canarias") {
    return precioSinIVA * PENINSULA_IVA;
  }

  return precioSinIVA;
}

const res = valor(50, "peninsula");
console.log(res);

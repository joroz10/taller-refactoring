const CANARIAS_IVA = 1.07;

function valor(n, l) {
  var value;
  if (l === "peninsula") {
    // Calcular el precio con el IVA de la Peninsula
    value = n * (1 + 0.21);
  } else if (l === "canarias") {
    // Calcular el precio con el IVA de Canarias
    value = n * (1 + 0.7);
  }

  return value;
}

const res = valor(50, "peninsula");
console.log(res);

function calculateTotal(item, l, isPremiumMember) {
  var value;
  if (l === "peninsula") {
    // Calcular el precio con el IVA de la Peninsula
    value = item.price * (1 + 0.21);
  } else if (l === "canarias") {
    // Calcular el precio con el IVA de Canarias
    value = item.price * (1 + 0.7);
  }

  if (isPremiumMember) {
    value *= 0.7;
  } else {
    value *= 0.9;
  }

  return value;
}

const x = calculateTotal({ name: "Product 1", price: 50 }, "peninsula", true);

console.log(`Product 1: ${x} €`);

function calculateTotal(producto, lugar, isPremiumMember) {
  var value;
  const CANARIAS_IVA = 1.07;
  const PENINSULA_IVA = 1.21;
  if (lugar === "peninsula") {
    // Calcular el precio con el IVA de la Peninsula
    value = producto.price * PENINSULA_IVA;
  } else if (lugar === "canarias") {
    // Calcular el precio con el IVA de Canarias
    value = producto.price * CANARIAS_IVA;
  }
  return calculateTotalIsPremium(value, isPremiumMember);
}
function calculateTotalIsPremium(producto, isPremiumMember){
  if (isPremiumMember) {
    return producto *= 0.7;
  } 
  return producto *= 0.9;
}

const x = calculateTotal({ name: "Product 1", price: 50 }, "peninsula", true);

console.log(`Product 1: ${x} €`);

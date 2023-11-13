function ShoppingCart() {
  let totalAmount = 0;
  let discountApplied = false;

  function calculateTotal(items, isPremiumMember) {
    if (items.length > 0) {
      totalAmount = items.reduce((sum, item) => sum + item.price, 0);
      if (isPremiumMember) {
        totalAmount *= 0.9;
        discountApplied = true;
      }
    } else {
      totalAmount = 0;
      discountApplied = false;
    }
  }

  function displaySummary() {
    if (totalAmount > 0) {
      console.log(`Total Amount: ${totalAmount}`);
      if (discountApplied) {
        console.log("Discount Applied: 10%");
      }
    } else {
      console.log("No items in the cart");
    }
  }

  return {
    calculateTotal,
    displaySummary,
  };
}

const shoppingCart = ShoppingCart();
shoppingCart.calculateTotal(
  [
    { name: "Product 1", price: 50 },
    { name: "Product 2", price: 30 },
  ],
  true
);
shoppingCart.displaySummary();

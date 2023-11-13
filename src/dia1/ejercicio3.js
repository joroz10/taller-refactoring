let val = 0.2;

function applyDiscount(num) {
  return num * (1 - val);
}

const res = applyDiscount(50);
console.log(res);

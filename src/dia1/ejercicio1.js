// Esta función calcula el promedio de calificaciones

let num = [80, 90, 75, 95, 88];

function f(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const average = f(num);
console.log(average);

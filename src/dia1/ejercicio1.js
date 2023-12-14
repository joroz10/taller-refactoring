// Esta función calcula el promedio de calificaciones

let num = [80, 90, 75, 95, 88];

function calcularMediaAritmetica(calificaciones) {
  let sum = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    sum += calificaciones[i];
  }
  return sum / calificaciones.length;
}

const average = calcularMediaAritmetica(num);
console.log(average);

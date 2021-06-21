// Let M be a not empty set of integer numbers, find the first subset of 2 numbers of M which sum N.
// For instance, let's say we've got a set of numbers [2, 5, 8, 14, 0] and N = 10, the resulting subset should be [2, 8].

// You're required to create a function that receives an array (M) and integer value (N).
// This function has to return an array of the first possible solution.

const Game01 = (mArray = [], n = 0) => {
  const mArrayFilter = filter(mArray, n);
  return recorrido(mArrayFilter, n);
};

const filter = (array = [], n = 0) => {
  return array.filter((m) => m <= n);
};

const recorrido = (array = [], n = 0) => {
  let suma = 0;
  let resultado = [];
  array.forEach((y, index1) => {
    array.forEach((m, index2) => {
      if (index1 !== index2) {
        suma = y + m;
        if (suma === n && resultado.length === 0) {
          resultado = [y, m];
        }
      }
    });
  });
  return resultado;
};

console.log(Game01([1, 5, 7, 10, 8], 17));

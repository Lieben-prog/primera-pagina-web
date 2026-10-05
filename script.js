// Programa sencillo: producto de las cifras de un número de 4 cifras

// Función que recibe un número entero de 4 cifras y devuelve el producto de sus cifras
function productoCifras4(n) {
  
  if (n < 1000 || n > 9999) {
    return "Error: debe ser un número entero de 4 cifras (1000-9999).";
  }

  var producto = 1;       
  var cifra = 0;           

  
  cifra = n % 10;
  producto = producto * cifra;
  n = Math.floor(n / 10);

 
  cifra = n % 10;
  producto = producto * cifra;
  n = Math.floor(n / 10);

  
  cifra = n % 10;
  producto = producto * cifra;
  n = Math.floor(n / 10);

  cifra = n % 10;
  producto = producto * cifra;
  n = Math.floor(n / 10);

  return producto;
}

console.log(productoCifras4(1234)); // debería imprimir 24
console.log(productoCifras4(1000)); // debería imprimir 0
console.log(productoCifras4(9999)); // debería imprimir 6561
console.log(productoCifras4(2025)); // debería imprimir 0

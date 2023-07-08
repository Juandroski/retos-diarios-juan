/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 */

function  esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function imprimirNumerosPrimos() {
    for (let i = 1; i <= 100; i++) {
      if (esPrimo(i)) {
        console.log(i);
      }
    }
  }
  
  // Comprobación de si un número es primo
  const numero = 17;
  if (esPrimo(numero)) {
    console.log(numero + " es primo.");
  } else {
    console.log(numero + " no es primo.");
  }
  
  // Imprimir los números primos entre 1 y 100
  console.log("Números primos entre 1 y 100:");
  imprimirNumerosPrimos();
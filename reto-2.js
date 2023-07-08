/*
 * Reto #2
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 */
//juan
function serieFibonacci(numeros){

    let arrayFibonacci = [0];
    
    let contador = 0;
    
     for (let index = 0; index < numeros; index++) {
            console.log(arrayFibonacci[index]);
        if(arrayFibonacci.length >= 2 ){
        
            let resultado = arrayFibonacci[arrayFibonacci.length - 2] + arrayFibonacci[arrayFibonacci.length - 1];
            arrayFibonacci.push(resultado);
        
        }else{
        
            arrayFibonacci.push(1);
        
        }
         contador++;
     }

}

serieFibonacci(50);


//Otra solucion identica pero mas entendible 

function imprimirFibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let fibonacci = [num1, num2];
  
    for (let i = 2; i < num; i++) {
      let siguienteNum = num1 + num2;
      fibonacci.push(siguienteNum);
      num1 = num2;
      num2 = siguienteNum;
    }
  
    return fibonacci;
  }
  
  // Imprimir los primeros 50 números de Fibonacci
  const fibonacci50 = imprimirFibonacci(50);
  //console.log(fibonacci50);
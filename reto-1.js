/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 * "Amor" y "Roma": Las letras de ambas palabras pueden reorganizarse para formar la otra palabra.
 * "Ratón" y "Trona"
 */

//Juan 
function esAnagrama(palabra1,palabra2){

    let arr1 = palabra1.split('');
    let arr2 = palabra2.split('');
    let anagrama = false;
    let caracterInvalido = 0;
    let caracterValido = 0;

    if(palabra1.length == palabra2.length){
        for (let index = 0; index < arr1.length; index++) {

            if(arr1.includes(arr2[index])){
                caracterValido++;
            }else{
                caracterInvalido++;
            }
        }
    }
    if(caracterInvalido == 0 && caracterValido > 0){
        anagrama = true;
    }

    return anagrama;

}


//console.log(esAnagrama("amor1","1roma"))


// misma solucion pero mas optima
function isAnagrama(primeraPalabra,segundaPalabra){

    this.primeraPalabra = primeraPalabra.toLowerCase().replace(/\s/g, "");
    this.segundaPalabra = segundaPalabra.toLowerCase().replace(/\s/g, "");

    console.log(primeraPalabra.length);
    console.log(segundaPalabra.length);

    if(primeraPalabra.length != segundaPalabra.length){
        return false;
    }

    let arr1 = primeraPalabra.split("").sort().join("");
    let arr2 = segundaPalabra.split("").sort().join("");

    return arr1 === arr2;

}

console.log(isAnagrama('amor','roma'));
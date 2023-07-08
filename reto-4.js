/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

let triangulo = {
    base: 5,
    altura: 4
};

let cuadrado = {
    lado: 5
};

let rectangulo = {
    base: 2,
    altura: 5
};

function area(poligono){

    if(poligono == triangulo){
        return ((triangulo.base * triangulo.altura ) / 2);
    }else if(poligono == cuadrado){
        return cuadrado.lado * cuadrado.lado;
    }else if(poligono == rectangulo){
        return rectangulo.base * rectangulo.altura;
    }else{
        console.log('pilogono invalido')
    }

}

console.log(area(cuadrado))

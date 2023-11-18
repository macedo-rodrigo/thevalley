/*
        Crear una función que devuelva el número de vocales 
        que tiene el string que le pasemos como parámetro.

        Consideramos que el string solo tiene letras minúsculas y espacios.
*/

let mySentence = "garota de ipanema";

function counter (sentence){ //creo una funcion para contar el numero de vocales
    let vowelsNumber = sentence.match(/[aeiou]/gi); //Busco coincidencias en la expresiòn regular. Saqué match() de internet.
    if (vowelsNumber === null){ // Output si no hay vocales
        return "Curiosamente, esta frase no tiene vocales!";
    } else {
        return vowelsNumber.length; //esta variable solo contiene vocales
    }
}

console.log("Esta frase contiene " + counter(mySentence) + " vocales.");
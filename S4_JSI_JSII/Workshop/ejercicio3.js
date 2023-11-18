/*
        Crea una función que reciba como argumento un array de números 
        y devuelva aquel que aparecen únicamente un número impar de veces.

        Ejemplos: 

            [1]         → Devuelve el número 1, ya que aparece una única vez
            [3,3,5]     → Devuelve el 5, ya que aparece 1 vez.
            [2,1,1,2,2] → Devuelve 2, ya que aparece 3 veces
*/

const numeros = [1,2,1,3,3,5];
function contadorRepetidosImpares(numerosComprobar) {
  let texto = '';
  let resultados = [
    {
      numero: numerosComprobar[0],
      nRepetidos: 1
    }
  ];
  for(let i=1; i< numerosComprobar.length; i++) {
    const indexExist = resultados.findIndex(val => numerosComprobar[i] === val.numero);
    if (indexExist === -1) {
      resultados.push({numero: numerosComprobar[i], nRepetidos: 1});
    } else {
      resultados[indexExist].nRepetidos++;
    }
  }
  resultados.forEach(value => {
    if (value.nRepetidos !== 0) {
      texto += `El numero ${value.numero} aparece ${value.nRepetidos} \n`;
    }
  })
  return texto
}
// contadorRepetidosImpares(numeros)
console.log(contadorRepetidosImpares(numeros));



















/*let result = [
    ]
    for (let i=0; i <= arry.length; i++){ // bucle para que recorra el array
        let exist = result.includes(value => value.numero === arry[i]);
        console.log(exist);
        if(exist === true) {

        } else 
    }
}

if (arry[i] % 2 !== 0)*/
/*
    Crea una función que reciba una serie de arrays como argumentos 
    y devuelva uno único ordenado.

    Ejemplo: 
        Recibe: 
            ([['Cristiano', 'Messi'], ['Neymar', 'Mbappe', Benzema'], 
            ['Vinicius', 'Kane']])  
        Devuelve: 
            ['Benzema', 'Cristiano', 'Kane', 'Mbappe', 'Messi', 
            'Neymar', 'Vinicius']
*/

let arrVarius = [['Cristiano', 'Messi'], ['Neymar', 'Mbappe', 'Benzema'], ['Vinicius', 'Kane']];

function concatArrays (ar){
    let result = [];
    for (i=0; i<ar.length; i++){
        result = i.concat(ar);
    }
}

console.log(concatArrays(arrVarius));
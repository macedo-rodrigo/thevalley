/*const miPrimeraPromesa = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('mensaje del timeout');
        let lista = ['manzana', 'banana', 'pera']
        resolve(lista);
        //reject(new Error ('no hay productos'));
    },2000);
})*/

/*miPrimeraPromesa.then(
    function(resultado){
        console.log(resultado);
    },
    function(err){
        console.log(err.name)
    }
);  //version optimizada abajo*/

// console.log('mensaje')

//version optimizada: usar un "catch" en el lugar del segundo parámetro del metodo then.
/*miPrimeraPromesa
    .then(function(resultado){
    console.log(resultado);
    })
    .catch(function(error){
    console.log(error.name);
    })*/

// Version array de esa misma función

/*miPrimeraPromesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log (error.message))
    .finally(() => console.log('Me ejecuto siempre'))*/

//Un poco de practica

let listParticipantes = ['Edu','Rodri','Sebas','Jorge','Maria'];

function anadirParticipante (nuevoParticipante, lista){
    const miPromesa = new Promise((resolve, reject) => {
        setTimeout(function(){
            if(!lista){
                reject(new Error ('No hay lista de participantes'));
            }else {
                lista.push(nuevoParticipante);
                resolve(lista);
            }
        },2000);
    })

    return miPromesa;
}

anadirParticipante('Luis', listParticipantes)
    .then(function(resultado){console.log(resultado)})
    .catch(function(error){console.log(error.message)})

// No olvidar estudiar el contenido PROMESAS II!
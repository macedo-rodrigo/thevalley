//Callback function es una función que se encuentra adentro de otra.

/*function saludar (nombre){
    console.log('hola ' + nombre);
}

function procesarEntradaDelUsuario(callback){
    let nombre = 'Federico';
    callback(nombre); // Es decir, "callback", que es un parametro, pasará a ser "saludar"
}

procesarEntradaDelUsuario(saludar);*/

function obtenerResultados(resultados){
    console.log('#RESPUESTA DEL SERVIDOR');
    console.log(resultados);

}

function solicitudServidor(consulta, callback){
    setTimeout(function(){
        let respuesta = consulta + 'netflix, hbo, amazon prime';
        callback(respuesta); //obtenerResultados(resposta = consulta + 'netfl....')
    },2000)

}

solicitudServidor('Servicios contratados por el usuario: ', obtenerResultados);

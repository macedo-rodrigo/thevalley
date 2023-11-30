
/*let resultado;
try{
    //ejecuta el codigo que queremos
    console.log('Hola');
    console.log('Hola 2');
    resultado = a;
    console.log('Hola 3');
}catch(err){
    // ejecuta el codigo en caso de error
    resultado = 0;
    console.log('Se ha producido un error')
    console.log(err.name); //nombre del error, tipo de error
    console.log(err.message); // mensaje (motivo)
    console.log(err.stack); //further information + tracking del error
    // Esto se suele usar cuando se manejan ficheros JSON y/o información que viene de un servidor.
}

console.log(resultado);*/

let json = '{"edad": 31}';
try{
    let cliente = JSON.parse(json);
    if(!cliente.user){
        throw new Error("Datos incompletos!"); // el Error es lo que va a salir en err.name y lo que està entre parénteses es el err.message!
    }
    console.log(cliente.user);
}catch(err){
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log('Voy a la pantalla principal')
}


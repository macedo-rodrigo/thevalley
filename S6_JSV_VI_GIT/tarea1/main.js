
function takeName(){
    // obtener el valor del input
    console.log('Funcion TakeName llamada');
    let input = document.getElementById('input').value

    fetch(`https://api.agify.io/?name=${input}`)
        .then(resultado => resultado.json()) // Como el metodo es get, necesito pasar el output a json
        .then(resultado => {
            let resultPrint = document.getElementById('output'); // Ubico donde quiero pinta el resultado en pantalla
            resultPrint.textContent = `${resultado.age}`; // Para remplazar el "?" por el resultado
            console.log(resultado.age);
        })
        .catch(error => console.log(error))
}

document.getElementById('predictButton').addEventListener('click', takeName); // Quise usar el loaded, pero al final me lié y desistí, igual a funcionado.


// Comentario general: sin googlear los errores y buscar soluciones en internet, no hubiese podido hacerlo!!!!

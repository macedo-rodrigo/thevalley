addEventListener("DOMContentLoaded", (event) => {
    // Tengo que traer las categorias
fetch("https://api.chucknorris.io/jokes/categories")
    .then (respuesta => respuesta.json())
    .then (resultado => {
    resultado.forEach(categoria => {
        //Cargar adentro del ul
        let lista = document.getElementById('lista');
        let li = document.createElement("li");
        li.textContent = categoria;
        lista.appendChild(li);
        // Agregar una clase a los utems de la lista
        li.className += "card__categories";
        // Ahora, agrego un clic a cada li
        li.addEventListener("click", () => {
            fetch(`https://api.chucknorris.io/jokes/random?category=${categoria}`)
            .then (respuesta => respuesta.json())    
            .then (answer => {
                    // Agregar el chiste al contener de respuesta
                    let chiste = document.getElementsByClassName('card__joke')[0]; // El [0] es pq es un array!
                    chiste.textContent = answer.value; //"value" es el valor del objeto que me da el API que me sirve, ya que se trata de la broma. 
                })
            .catch (fail => console.log(fail));
        });
    })
})
    .catch (error => console.log(error));
})

addEventListener('click', (random) => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then (reply => reply.json())    
    .then (result => { // Agregar el chiste al contener de respuesta
            let randomJoke = document.getElementsByClassName('card__joke')[0]; // El [0] es pq es un array!
            randomJoke.textContent = result.value; //"value" es el valor del objeto que me da el API que me sirve, ya que se trata de la broma.
            })
})





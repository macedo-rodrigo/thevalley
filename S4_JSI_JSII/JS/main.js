/*
let zapatilla = {
    marca: "Nike",
    modelo: "Air Max",
    talla: 46,
    precio: 100
};
*/

let zapatilla = new Object();
zapatilla.marca = "Nike";
zapatilla.modelo = "Air Max";
zapatilla.talla = 46;
zapatilla.precio = 100;
zapatilla.color = "Rojo";

let claves = Object.keys(zapatilla);

console.log(claves);

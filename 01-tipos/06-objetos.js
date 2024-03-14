// personaje de tv
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;
personaje['nombre'] = "Shinoub";

let llave = 'edad';
personaje[llave] = 16;
console.log(personaje.edad)
delete personaje.anime;
//object.hasOwnProperty
var libros = {autor: "Borges", genero: "Policial", año: 1998};
var sentencia = libros.hasOwnProperty("nombre");
console.log(sentencia);
var sentencia = libros.hasOwnProperty("autor");
console.log(sentencia);

//object.keys

var todasLasPropiedades = Object.keys(libros);
console.log(todasLasPropiedades);

//Bucle for in para objetos
// Sirve para recorrer objetos

var mundo = {paises: 10, continentes: 5, oceanos: 20};

for (var prop in mundo){
    console.log("este es la propiedad " + prop);
    console.log("este es el valor " + mundo[prop]);
}

//Objeto This

var mascota = {
    animal: "Perro",
    raza: "Obejero aleman", 
    amistoso: true,
    dueño: "lucho",
    info: function (){
        console.log ("La raza del perro es " + this.raza);
    }
}
mascota.info();
var deportes = {
    conBalon: ["football", "basketball", "handball"], // conBalon (Clave) entre "[]" valores.
    sinBalon: ["Boxeo", "Surf", "AirSoft"] // claves no se repiten aunque se pueden repetir los valores
};// valores pueden ser todo tipo de dato, cadena, enteros, booleanos, hasta un objetos.
var persona = {
    nombre: "lucho",
    edad: 26,
    estudios: {esProgramador: true}// demostracion de objeto dentro de otro objeto
};
console.log (persona.edad); // objeto.valor para manipular 
persona.nombre = "Lucas";// para cambiar valor de una propiedad
console.log(persona.nombre);
persona.edad = 32;
console.log (persona.edad);

var autos = {};
autos.marcas = ["ford", "audi", "ferrari"];//Forma de agregar propiedades mas sus valores
delete autos.marcas;// eliminar una propiedad del objeto
console.log(autos);

var misFunciones = {
    saludar : function (){// Valor puede ser una funcion guardada para utilizar mas tarde
        console.log("hola");
    },
};
misFunciones.saludar();

var atuendos = {manos: ["guantes", "relojes"], pies: ["zapatillas", "medias"]};

atuendos["piernas"] = ["bermudas", "pantalones"];

var comidas = {};
var diferenciaDeNotaciones = function (prop1, prop2, prop3){
    comidas.prop1 = "Frutas, verduras";
    comidas["prop2"] = "Hamburguesas, Papas Fritas";// cuando a las variables de la funcion se le agregue valor, 
                                                    //    no cambiara el nombre de la propiedad
    comidas[prop3] = "Lechuga, tomates"; // nos permite que la propiedad adopte como nombre el valor asignado como 
                                         //variable de la funcion
}
diferenciaDeNotaciones("Saludable", "No saludable", "Saludable");
console.log(comidas);
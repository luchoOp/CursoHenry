var listaDeCompras = [];

listaDeCompras [3] = "tomates";
listaDeCompras [1] = "lechuga";

//console.log(listaDeCompras);
//listaDeCompras[1];

/*var elementoArray = listaDeCompras [1];
console.log(elementoArray);*/

console.log(listaDeCompras.length);//length nos dice la cantidad de posiciones que posee dicho array


var colores = ["amarillo", "azul"];
colores.push("rojo");// agrega una posicion con elemento alfinal
colores.unshift ("verde");//agrega una posicion con elemento al principio
colores.pop();// elimina la ultima posicion
colores.shift(); // elimina la primera posicion del array
console.log(colores);

var pintores = ["picasso", "Vangho", "Roman", "Messi"];
var inclusion = pintores.includes("Aguero"); // verifica si un elemento se encuentra en alguna posicion
                                            //lo devuelve en verdadero o falso. da su respuesta en booleano
console.log(inclusion);

var numeros = [7, 6, 8, 10];
var cumplenCondicion = numeros.every((num)=>{
    return num > 5;
});// Every para ver si todos los elementos cumplen una condicion, respuesta en booleano
console.log(cumplenCondicion);
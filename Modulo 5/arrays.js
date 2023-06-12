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

var palabra = "henri";
var palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);
var palabraArreglada = palabraSeparada.join("");
console.log(palabraArreglada);

var numeros = [1,2,3,4];
numeros.forEach ((num)=>{console.log(num)});
numeros.forEach ((num)=>{
    if(num == 3){
        console.log(num);
    }
});

var masUno = numeros.map ((num)=>{
    return num + 1;
});
console.log(masUno);

var arr = [1,3,6,9,12];
for (var i = 0; i < arr.length; i++){
    console.log (arr[i]);
}

function encontrarLetraP (string){
    var letrasP = string.split("");
    for (var i = 0; i < letrasP.length; i ++){
        if (letrasP[i]=="p"||letrasP[i]=="P"){
            console.log("La letra P esta en la posicion " + i);
        }
    }
}
encontrarLetraP("Manuel");
encontrarLetraP("Pablo");

var arr1 = [];
while (arr1.length < 5){
    arr1.push("Boom");
}
console.log(arr1);

/*var arr2 = [];
var n = 1;
    while (n < 3){
        arr2.push(Math.random());
    } //bucle infinito, evitarlo */


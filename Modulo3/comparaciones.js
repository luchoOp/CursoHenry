//Operaciones de comparación
console.log (4 < 7); 
console.log (4 <= 1 );
console.log (4 > 4); 
console.log (4 == 7);
console.log (4 != 4);

var n1 = 10;
var n2 = "10";
console.log (n1 === n2); // === tipo de dato y valor
console.log (n1 == n2);// == valor

var a = 1;
var b = 2;
var c = a = b; // asociativa hacia la derecha por lo que a = b y c = a = 2
console.log(c);

console.log (16 / 2 / 4); // asociativa hacia la izquierda 16/2=8 y 8 / 4 = 2

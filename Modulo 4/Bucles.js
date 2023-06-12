var suma = 0;
for ( var i = 0; i < 10; i++){
    suma = suma + i;
    console.log("variable de interaccion " + suma);
}
console.log("variable suma " + suma);

suma = 0;

while (suma < 3){
    suma = suma + 1;
    console.log(suma); 
}

switch (expresion) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      break;
    case valor2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      break;
    case valorN:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      break;
  } 

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

i = 0;
n = 0;
while (i < 5) {
   i++;
   if (i == 3)
      continue;
   n += i;
}

checkiandj:
while (i < 4) {
  document.write(i + "<br>");
  i += 1;

  checkj:
  while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if ((j % 2) == 0)
      continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>");
  document.write("j = " + j + "<br>");
}

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
       if (i == 3)
          break;
       i++;
    }
    return i * x;
 }

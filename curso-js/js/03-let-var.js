
// PRUEBA CON var
var numero = 40;
console.log(numero); // Valor será 40

if (true) {
  var numero = 50;
  console.log(numero); // Valor será 50
}

console.log(numero); // Valor será 50


//PRUEBA CON let

var texto = "Curso JS";
console.log(texto); // Valor será Curso JS

if (true) {
  let texto = "Curso ss";
  console.log(texto); // Valor será ss
}

console.log(texto); // Valor será Curso JS

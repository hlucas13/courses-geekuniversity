// Operações matemáticas
var num1 = 42,
  num2 = 19,
  nome = 'Geek';
// var num2 = 19;

console.log(num1, num2, nome);

// soma
var res = num1 + num2;
console.log('O resultado é: ' + res);

// CUIDADO!
var num3 = '39'; // '' string
res = num1 + num3; // vai concatenar
console.log(res);

// subtração
res = num1 - num2;
console.log(res);

// multiplicação
res = num1 * num2;
console.log(res);

// subtração
res = num1 / 2;
console.log(res);

// módulo
res = num2 % 2;
console.log(res);

// incremento/decremento
// num1 = num1 + 8;
num1 += 8; // -= *= /=
console.log(num1);

console.log(num1++); // imprime e depois incrementa
console.log(num1--); // imprime e depois decrementa
console.log(++num1); // incrementa e depois imprime
console.log(--num1); // decrementa e depois imprime

var outro = 10;
console.log(--outro);
console.log(outro);

// Hoisting
console.log(nome); // undefined - aqui ocorre o hoisting (içamento)

var nome = 'Geek'; // declarando e inicializando a variável
console.log(nome);

/*
Por trás ocorre isso (usando var):
var nome; // undefined
console.log(nome);

nome = 'Geek'; // atribuindo valor
console.log(nome);
*/

// Usando let e const
// console.log(nome2); // ReferenceError: nome2 is not defined

let nome2 = 'University'; // declarando e inicializando a variável
console.log(nome2);

// console.log(IDADE); // ReferenceError: age is not defined

const IDADE = 28; // declarando e inicializando a variável
console.log(IDADE);

// NaN
console.log(valor + 4); // NaN -> Not a Number

var valor = 10;
console.log(valor);

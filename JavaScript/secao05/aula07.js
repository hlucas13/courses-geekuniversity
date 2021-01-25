// Var, Let e Const
// var
var numero = 42;
console.log(numero);

numero = numero + 18;
console.log(numero);

// let
let outroNumero = 42;
console.log(outroNumero);

outroNumero = outroNumero + 18;
console.log(outroNumero);

let nome = 'Geek';
console.log(nome);

nome = 'University';
console.log(nome);

/*
for (var i = 0; i < 5; i++) {
    var valor = i * 3;
    console.log('For: ' + valor);
}

console.log(valor); // imprime, var -> global
console.log('i: ' + i); // imprime, var -> global

for (let j = 0; j < 5; j++) {
    let valor2 = j * 3;
    console.log('For: ' + valor2);
}

console.log(valor2); // ReferenceError, let -> local
console.log('j: ' + j); // ReferenceError, let -> local
*/

var numero2 = 80;
console.log(numero2);

var numero2 = 32; // var -> permite declarar variável de mesmo nome
console.log(numero2);

let outroNumero2 = 80;
console.log(outroNumero2);

// let outroNumero2 = 32 //SyntaxError - let -> não permite declarar variável de mesmo nome
// console.log(outroNumero2)

// const
const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

// TAXA = 5 // TypeError -> constante não varia o valor
// console.log(TAXA);

// Constante vs Mutação
const CURSO = { nome: 'Programação em JavaScript' };
console.log(CURSO.nome);

// Não podemos alterar o valor de uma constante
// curso = 43; // TypeError

// Podemos realizar mutação em dados contidos na constante
CURSO.nome = 'Programação em Python'; // Mutação
console.log(CURSO.nome);

/*
Dicas de como declarar variáveis em JavaScript

- A variável poderá ser alterada? (vai variar?)
    Se sim, use let

- A variável será constante? (não vai variar?)
    Se sim, use const
*/

const VALOR = 5; // não vai variar, portanto const

for (let i = 0; i < VALOR; i++) {
    // valor de i vai variar, portanto let
    console.log(VALOR - i);
}

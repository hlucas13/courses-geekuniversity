// First class citizens

/*
Funções são cidadãos de primeira classe
Podemos utilizá-las como tipo de dados
*/

function somar(num1, num2) {
    return num1 + num2;
}

let res = somar(4, 6);
console.log(res);

console.log(somar(10, 5));

// Exemplo 1
const EXECUTAR = somar;
console.log(EXECUTAR(8, 7));

// Exemplo 2
function subtrair(num1, num2) {
    return num1 - num2;
}

function fazAlgo(num1, num2, funcao) {
    return funcao(num1, num2);
}

console.log(fazAlgo(5, 5, somar));
console.log(fazAlgo(8, 3, subtrair));

// Exemplo 3
function outra(funcao) {
    return funcao;
}

const RET = outra(somar);
console.log(RET(8, 2));

/*
Cidadãos de primeira classe
First class citizens
First class objects
Higher-order function
*/

// Função sem retorno explícito, não tem a palavra return
function mensagem() {
    console.log('Evolua o seu lado geek!');
    // retorna "undefined"
}

let retorno = mensagem();
console.log(retorno); // imprime o console.log da mensagem e depois imprime "undefined" que é o return implícito

let valores = [1, 3.4, true, somar]; // somar é uma função e é passada como tipo de dado.

for (let i = 0; i < valores.length; i++) {
    console.log(typeof valores[i]);
}

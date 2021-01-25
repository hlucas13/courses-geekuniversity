/*
Array contendo 5 elementos -> n = 5

Índices -> posição do elemento no array
[0][1][2][3][4]
último elemento -> n - 1

Valores em um array
[12]['Geek'][true][48][52]

Detalhes sobre arrays:
- Possuem tamanho infinito*
- Podemos colocar qualquer tipo de dado, mas ideal é um array para o mesmo tipo.

*depende da memória do pc (em algumas linguagens o tamanho é definido, ex: Java, C)
*/

// Forma 1
var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
// var alunos = ['Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia'];
console.log(alunos);

// Forma 2 [Recomendada]
var notas = [1, 3, 5, 7, 9];
console.log(notas);

// Criando um array vazio
var dados = [];
console.log(dados);

// Fazendo acesso ao valor de um índice
console.log(notas[2]);

// Alterando o valor a partir do índice
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com índice que não existe
notas[9] = 10; // não existe
console.log(notas);

console.log(notas[5]); // undefined
console.log(notas[6]); // undefined
console.log(notas[7]); // undefined
console.log(notas[8]); // undefined
console.log(notas[9]); // 10

// Inserindo elementos no final do array
var nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);

nomes.push('Vanessa'); // insere o valor no final do array
console.log(nomes);

// Tamanho do array
console.log(nomes.length);

// Ordenar os dados de um array
alunos.sort(); // Ordenando array de strings
console.log(alunos);

var precos = [123.55, 42.27, 546.99, 23.12];
console.log(precos);

// precos.sort(); // ATENÇÃO: sort converte os valores em strings e ordena a partir do primeiro caractere
// console.log(precos);

precos.sort(function (a, b) {
    return a - b;
});
console.log(precos);

var idades = [5, 1, 8, 12, 44, 78];
console.log(idades);

// idades.sort(); // ATENÇÃO: sort converte os valores em strings e ordena a partir do primeiro caractere
// console.log(idades);

idades.sort(function (a, b) {
    return a - b;
});
console.log(idades);

// Excluir dados de um array
delete idades[3]; // apaga o valor, mas mantém o tamanho do array
console.log(idades);

idades[3] = 12;
console.log(idades);

idades.splice(3, 2); // A partir do índice "3", exclua "2" elementos. Diminui o tamanho do array
console.log(idades);

idades.splice(3, 0, 56, 89); // A partir do índice "3", exclua "0" elementos e adicione os valores "56" e "89"
console.log(idades);

idades.splice(3, 1, 23); // A partir do índice "3", exclua "1" elemento e adicione o valor "23"
console.log(idades);

// Iterar em um array
for (var i = 0; i < idades.length; i++) {
    console.log(idades[i]);
}

// Excluindo elementos da última posição do array
// idades.pop();
// console.log(idades);

var retornoPop = idades.pop(); // remove o valor e guarda numa variável
console.log(retornoPop);
console.log(idades);

// Excluindo o primeiro elemento de um array
// idades.shift();
// console.log(idades);

var retornoShift = idades.shift();
console.log(retornoShift);
console.log(idades);

// Adicionando elementos no início de um array
idades.unshift(99);
console.log(idades);

// Retornando um novo array a partir do índice informado
var novo = idades.slice(3);
console.log(novo);

var novo2 = idades.slice(1, 2); // a partir do índice "1", pegue até o índice "2" sem incluí-lo
console.log(novo2);

// Concatenar arrays
var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatena os dois arrays
console.log(rest);

rest = impares.concat(pares);
console.log(rest);

rest.sort(function (a, b) {
    return a - b;
});
console.log(rest);

// Matriz (array de arrays)
var tabuleiro = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

console.log(tabuleiro[0][0]); // linha 0, coluna 0 -> 1
console.log(tabuleiro[2][2]); // linha 2, coluna 2 -> 11

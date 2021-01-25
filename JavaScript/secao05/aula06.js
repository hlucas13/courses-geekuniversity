// Reduce
var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;

for (var i = 0; i < precos.length; i++) {
    soma = soma + precos[i];
}

console.log('Usando for: ' + soma);

soma = 0;

precos.forEach(function (valor) {
    soma = soma + valor;
});

console.log('Usando forEach: ' + soma);

function somar(anterior, atual) {
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);

/*
Como funciona o reduce?
[ 4.66, 3.78, 9.78, 1.34, 5.32 ]

Primeira execução:
    - Pega os dois primeiros valores(index 0 e 1), soma e retorna esse valor;
Nas demais execuções:
    - Pega o retorno da execução anterior e soma com o próximo valor (index 2...).

1 -> 4.66 + 3.78 = 8.44
2 -> 8.44 + 9.78 = 18.22
3 -> 18.22 + 1.34 = 19.56
4 -> 19.56 + 5.32 = 24.88
*/

// Exemplo map/reduce
function adicionarTaxa(valor) {
    return valor + 5;
}

ret = precos.map(adicionarTaxa).reduce(somar); // adicionou 5 em cada valor e somou todos
console.log(ret);

// Exemplo filter/map/reduce
function precoMaiorQue4(valor) {
    return valor > 4;
}

ret = precos.filter(precoMaiorQue4).map(adicionarTaxa).reduce(somar); // filtrou valores maior que 4, adicionou 5 em cada valor e somou todos
console.log(ret);

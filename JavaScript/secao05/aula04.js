// Map
// Realiza transformações e gera um novo array

var valores = [2, 4, 6, 8, 10];
console.log(valores);

var dobro = valores.map(function (valor) {
    return valor * 2;
});
console.log(dobro);

// Também pode separar a função ao invés de função anónima
function dobrar(valor) {
    return valor * 2;
}

dobro = valores.map(dobrar);
console.log(dobro);

// Encadeando maps para realizar múltiplas transformações
function somar4(valor) {
    return valor + 4;
}

function dividirPor5(valor) {
    return valor / 5;
}

var resultado = valores.map(dobrar).map(somar4).map(dividirPor5);
console.log(resultado);

/*
Passo 1 -> dobrar = [4, 8, 12, 16, 20]
Passo 2 -> somar4 = [8, 12, 16, 20, 24]
Passo 3 -> dividirPor5 = [1.6, 2.4, 3.2, 4, 4.8]
*/

// Para testar com string
var nomes = ['Beatriz', 'Vitoria', 'Guilherme'];
console.log(nomes);

var sobrenome = nomes.map(function (valor) {
    return valor + ' Oliveira';
});
console.log(sobrenome);
// Estruturas condicionais
// if else
var idade = 13;

if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

if (idade <= 14) {
    console.log('Criança');
} else if (idade > 14 && idade < 18) {
    console.log('Adolescente');
} else {
    console.log('Adulto');
}

// dica
// == verifica valor
if (1 == '1') {
    console.log('Sim, 1 == "1"');
} else {
    console.log('Não');
}

var valor = 42;
var valorS = '42';

// === verifica valor e tipo de dado
if (valor === valorS) {
    console.log('Sim, valor === valors');
} else {
    console.log('Não');
}

var sexo = 'M';

// switch
switch (sexo) {
    case 'M':
        console.log('Masculino');
        break;
    case 'F':
        console.log('Feminino');
        break;
    default:
        console.log('Desconhecido');
        break;
}

// outro exemplo
var s = 'F';
var masculino;

if (s === 'M') {
    masculino = true;
} else {
    masculino = false;
}

console.log(masculino);

// simplificando exemplo
var masc = s === 'M';
console.log(masc);

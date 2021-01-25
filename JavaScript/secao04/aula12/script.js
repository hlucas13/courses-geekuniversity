// Escopo de variáveis

var teste = 42; // variável global

function somar(num1, num2) {
    // variável local (só é reconhecida dentro do bloco da função)
    var valor = 5;
    return valor + num1 + num2;
}

for (var i = 0; i < 5; i++) {
    // var -> variável global
    var outra = 5;
    console.log(i * outra);
}

console.log(somar(4, 6));

//console.log(valor); // ReferenceError -> variável dentro do bloco da função

console.log(outra); // Temos acesso, foi declarada em um bloco for como "var"
console.log(i);

for (var j = 0; j < 5; j++) {
    // let -> variável local
    let uma = 12;
    console.log(j * uma);
}

// console.log(uma); // Error -> foi declarada em um bloco for, mas como "let"
console.log(j);

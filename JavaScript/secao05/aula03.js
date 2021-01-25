// Foreach

var cursos = [
    'Programação para leigos',
    'Algoritmos e lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de dados',
    'Programação web com Django Framework',
    'Programação em JavaScript',
];

// console.log(cursos);
// console.log(cursos.length);

// Definir uma função (recebe os 3 parâmetros do foreach)
function imprimir(curso, indice, array) {
    console.log(indice + ' - ' + curso);
    console.log(array);
}

// Foreach = para cada
// Fornece 3 parâmetros: valor, índice e o próprio array
// cursos.forEach(imprimir);

// Utilização de uma função anónima (lambda/callback) e template string
cursos.forEach(function (curso, indice) {
    console.log(`${indice} - ${curso}`);
});

// Mesmo resultado, mas usando for
/*
for (var i = 0; i < cursos.length; i++) {
    console.log(i + ' - ' + cursos[i]);
}
*/

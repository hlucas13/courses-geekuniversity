// Filter
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

function filtrarPares(n) {
    return n % 2 === 0;
}

// console.log(filtrarPares(3)); // false
// console.log(filtrarPares(8)); // true

function filtrarImpares(n) {
    return n % 2 !== 0;
}

function filtrarMultiplos5(n) {
    return n % 5 === 0;
}

var ret = numeros.filter(filtrarPares);
console.log(ret);

ret = numeros.filter(filtrarImpares);
console.log(ret);

ret = numeros.filter(filtrarMultiplos5);
console.log(ret);

var alunos = [
    { nome: 'Pedro', nota: 8.5 },
    { nome: 'Maria', nota: 10 },
    { nome: 'Fernanda', nota: 9.2 },
    { nome: 'Ricardo', nota: 7.3 },
];
console.log(alunos);

function filtrarNotasMaioresQue8(aluno) {
    return aluno.nota > 8;
}

function filtrarNotasMaioresQue7(aluno) {
    return aluno.nota > 7;
}

var filtrados = alunos.filter(filtrarNotasMaioresQue8);
console.log(filtrados);

filtrados = alunos.filter(filtrarNotasMaioresQue7);
console.log(filtrados);

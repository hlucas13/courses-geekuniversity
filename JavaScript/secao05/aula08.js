// Template strings
let idade = 19;
const NOME = 'GEEK';

function soma3(idade) {
    return idade + 3;
}

console.log(NOME + ' tem ' + idade + ' anos.');

// Com template strings
console.log(`${NOME} tem ${soma3(idade)} anos.`);

/*
Em template strings usa-se a crase (`) e não aspas simples ou duplas
*/

// Funções com parâmetro de entrada e retorno
function calcularIdade1(anoDeNascimento) {
    const DATA = new Date(); // gera data atual padrão ISO
    const IDADE = DATA.getFullYear() - anoDeNascimento; // pega o ano da data menos o ano de nascimento
    return IDADE; // com retorno, pode recuperar o dado
}

function calcularIdade2(anoDeNascimento) {
    const DATA = new Date(); // gera data atual padrão ISO
    const IDADE = DATA.getFullYear() - anoDeNascimento; // pega o ano da data menos o ano de nascimento
    console.log(IDADE); // sem retorno, não pode recuperar o dado
}

let ret = calcularIdade1(1994);
console.log(ret);

calcularIdade2(1992);

// Classe Date
const DATA = new Date();
console.log('Data completa: ' + DATA);
console.log('Ano: ' + DATA.getFullYear());
console.log('Mês: ' + DATA.getMonth()); // 0 para janeiro, 1 para fevereiro...

// Fique esperto!
function somar(num1, num2) {
    return num1 + num2;
}

console.log(somar(4, 6)); // 10
console.log(somar(4)); // NaN -> segundo parâmetro é undefined
console.log(somar(4, 6, 8)); // 10 -> desconsidera os outros parâmetros, mas são possíveis de serem recuperados

// Operadores lógicos

var curso = 'JavaScript';
var legal = false;

// AND (e = ambas expressões devem ser verdadeiras)
if (curso === 'JavaScript' && legal === true) {
  console.log('O curso de JavaScript é legal!');
} else {
  console.log('O curso não é de JavaScript ou não é legal');
}

// OR (ou = pelo menos uma expressão deve ser verdadeira)
if (curso === 'JavaScript' || legal === true) {
  console.log('O curso de JavaScript é legal!');
} else {
  console.log('O curso não é de JavaScript ou não é legal');
}

// NOT (quando queremos fazer uma negação o verificar se algo não é como esperado)
if (curso != 'JavaScript') {
  console.log('O curso não é JavaScript');
} else {
  console.log('O curso é JavaScript');
}

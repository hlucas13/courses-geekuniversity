// Comandos de decisão

// se/senão (if/else):
let average = 10;

if (average >= 5) {
    console.log('Aluno aprovado');
} else {
    console.log('Aluno reprovado');
}

// caso/selecione (switch/case):
let option = 3;

// selecione:
switch (option) {
    case 1: // caso
        console.log('Selecionou opção 1');
        break; // saia
    case 2:
        console.log('Selecionou opção 2');
        break;
    case 3:
        console.log('Selecionou opção 3');
        break;
    // padrão:
    default:
        console.log('Nenhuma opção selecionada');
        break;
}

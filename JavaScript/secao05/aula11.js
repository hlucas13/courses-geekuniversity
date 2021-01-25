// Tratamento de erros com Try Catch
// console.log(nome); // ReferenceError
// console.log('Oi...') // não vai imprimir, para no erro
// console.log(4.Oi()); // SyntaxError

try {
    // tente
    console.log(nome);
} catch (e) {
    // se não funcionar, capture o erro
    console.log('Não foi possível imprimir "nome"'); // definindo uma mensagem de erro
    console.log(e.name); // nome do erro -> ReferenceError
    console.log(e.message); // mensagem de erro -> nome is not defined
}

console.log('Oi...');

// Lançando erros
function dividir(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        throw 'Os valores devem ser positivos'; // lançando uma exceção (erro)
    } else {
        return num1 / num2;
    }
}

try {
    let ret = dividir(8, 2);
    console.log(ret);
} catch (e) {
    console.log('Não foi possível dividir.');
} finally {
    // independente se vai ter um erro ou não, o finally executa
    console.log('Vamos continuar...');
}

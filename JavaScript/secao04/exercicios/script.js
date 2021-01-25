// Exercício 01:
var cliente = {
    nome: 'Maria das Graças Xuxa Meneguel',
    email: 'xuxa@666.com',
    telefone: '+55 11 666-6566',
    rua: 'Rua dos Baixinhos',
    numero: 666,
    bairro: 'Pinheiros',
    cidade: 'São Paulo',
    uf: 'SP',
};

function texto(objeto) {
    console.log('O(a) cliente ' + objeto.nome + ' mora em ' + objeto.cidade + ', ' + objeto.uf + '.');
}

texto(cliente);

// Exercício 02:
function ímpar(n1, n2) {
    var numero = n1;

    while (numero < n2) {
        if (numero !== n1 && numero % 2 === 1) {
            console.log(numero);
        }

        numero++;
    }
}

ímpar(1, 100);

// Exercício 03:
function experiência(anos) {
    if (anos <= 2) {
        console.log('Júnior');
    } else if (anos >= 3 && anos <= 5) {
        console.log('Pleno');
    } else {
        console.log('Sênior');
    }
}

experiência(1);
experiência(4);
experiência(7);

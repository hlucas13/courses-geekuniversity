// Intervalos e Timeout

function escrever() {
    console.log('Geek University');
}

function escrever2() {
    console.log('Evolua seu lado geek');
}

// Intervalo -> repete a execução a cada intervalo de tempo
setInterval(escrever, 5000); // 5000ms = 5s

// Timeout (tempo esgotado) -> atrasa e executa uma vez
setTimeout(escrever2, 3000); // 3000ms = 3s

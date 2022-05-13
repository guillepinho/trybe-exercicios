let numerosJogados = [];
let numerosSorteados = [];
let acertados = 0;

for (let i = 1; i <= 6; i += 1) {
    let novoNumeroJogado = Math.floor(Math.random() * 60) + 1;
    if (numerosJogados.indexOf(novoNumeroJogado) == -1) {
        numerosJogados.push(novoNumeroJogado);
    }
    else {
        i -= 1;
    }
}

for (let i = 1; i <= 6; i += 1) {
    let novoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
    if (numerosSorteados.indexOf(novoNumeroSorteado) == -1) {
        numerosSorteados.push(novoNumeroSorteado);
    }
    else {
        i -= 1;
    }
}

for (jogados in numerosJogados) {
    for (sorteados in numerosSorteados) {
        if (numerosJogados[jogados] === numerosSorteados[sorteados]) {
            acertados += 1;
        }
    }
}

console.log(`Números Jogados pelo Usuário: ${numerosJogados.join(', ')}.`);
console.log(`Números Sorteados no jogo: ${numerosSorteados.join(', ')}.`);
console.log(`Números acertados pelo jogador: ${acertados}`);

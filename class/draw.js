function draw() {
    // Desenhe a imagem de fundo
    background(fundo);
    
    raia.render();
    raia.turn();
    raia.update();
    raia.edges();

    for (let i = choques.length - 1; i >= 0; i--) {
        choques[i].render();
        choques[i].update();
        if (choques[i].offscreen()) {
            choques.splice(i, 1);
        } else {
            for (let j = peixes.length - 1; j >= 0; j--) {
                if (choques[i].hits(peixes[j])) {
                    if (peixes[j].r > 15) {
                        let newPeixes = peixes[j].breakup();
                        peixes = peixes.concat(newPeixes);
                    }
                    peixes.splice(j, 1);
                    choques.splice(i, 1);
                    pontuacao.aumentarPontos(1); // Aumenta a pontuação
                    break;
                }
            }
        }
    }

    // Verifica a colisão entre a raia e os peixes
    Colisao.verificarColisao(raia, peixes, pontuacao);

    for (let i = 0; i < peixes.length; i++) {
        peixes[i].render();
        peixes[i].update();
        peixes[i].edges();
    }

    // Exibe a pontuação na tela
    pontuacao.mostrar();
}

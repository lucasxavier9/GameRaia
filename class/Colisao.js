// Define a classe Colisao
class Colisao {
    // Método estático que verifica colisões entre a raia e os peixes
    static verificarColisao(raia, peixes, pontuacao) {
        // Itera sobre a lista de peixes de trás para frente
        for (let i = peixes.length - 1; i >= 0; i--) {
            let peixe = peixes[i]; // Obtém o peixe atual
            // Calcula a distância entre a raia e o peixe atual
            let d = dist(raia.pos.x, raia.pos.y, peixe.pos.x, peixe.pos.y);
            
            // Verifica se a distância é menor que o raio do peixe, indicando uma colisão
            if (d < peixe.r) {
                // Colisão detectada
                // Deduz 5 pontos da pontuação por colidir com o peixe
                pontuacao.deduzirPontos(5);
                
                // Remove o peixe da lista de peixes
                peixes.splice(i, 1);
                
                // Verifica se a pontuação ficou menor que 0 após a colisão
                if (pontuacao.pontos < 0) {
                    // Chama o método de game over da classe Pontuacao
                    pontuacao.gameOver();
                }
                // Sai do loop após a primeira colisão detectada (assumindo apenas uma colisão por vez)
                break;
            }
        }
    }
}

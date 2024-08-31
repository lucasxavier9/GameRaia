class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    aumentarPontos(valor) {
        this.pontos += valor;
    }

    deduzirPontos(valor) {
        this.pontos -= valor;
    }

    mostrar() {
        fill(255);
        textSize(32);
        text("Pontuação: " + this.pontos, 10, 30);
    }

    gameOver() {
        fill(255, 0, 0);
        textSize(64);
        text("Game Over", width / 2 - 150, height / 2);
        noLoop(); // Para o loop de desenho
    }
}

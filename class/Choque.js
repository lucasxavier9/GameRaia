class Choque {
    constructor(spos, angle) {
        // Inicializa a posição do choque no vetor passado (spos)
        this.pos = createVector(spos.x, spos.y);

        // Cria um vetor de velocidade a partir do ângulo passado e ajusta sua magnitude
        this.vel = p5.Vector.fromAngle(angle);
        this.vel.mult(10); // Aumenta a velocidade inicial do choque
        this.image = choqueImage; 
        this.size = 30;
    }

    update() {
        // Atualiza a posição do choque somando a sua velocidade
        this.pos.add(this.vel);
    }

    render() {
        // Desenha o choque na tela
        push(); // Salva o estado atual do canvas
        translate(this.pos.x, this.pos.y); // Move a origem do canvas para a posição do choque
        imageMode(CENTER); // Define o modo de imagem para que a imagem seja desenhada com o centro na posição especificada
        image(this.image, 0, 0, this.size, this.size); // Desenha a imagem do choque no canvas, ajustando o tamanho
        pop(); // Restaura o estado do canvas ao que era antes do push
    }

    offscreen() {
        // Verifica se o choque está fora da tela
        return (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0);
    }

    hits(peixe) {
        // Calcula a distância entre o choque e o peixe
        let d = dist(this.pos.x, this.pos.y, peixe.pos.x, peixe.pos.y);

        // Retorna verdadeiro se a distância for menor que o raio do peixe, indicando uma colisão
        return (d < peixe.r);
    }
}

class Peixe {
    constructor(pos, r) {
        // Se uma posição (pos) for fornecida, a define para a posição do peixe. Caso contrário, define uma posição aleatória.
        if (pos) {
            this.pos = pos.copy();
        } else {
            this.pos = createVector(random(width), random(height));
        }
        
        // Se um raio (r) for fornecido, usa metade desse valor. Caso contrário, define um raio aleatório entre 15 e 50.
        if (r) {
            this.r = r * 0.5;
        } else {
            this.r = random(15, 50);
        }
        
        // Define a velocidade inicial do peixe como um vetor aleatório em duas dimensões.
        this.vel = p5.Vector.random2D();
        
        // Carrega a imagem do peixe. Certifique-se de que o caminho da imagem está correto.
        this.image = loadImage('images/peixe.png'); // Carregue a imagem
    }

    // Atualiza a posição do peixe adicionando a velocidade à posição atual
    update() {
        this.pos.add(this.vel);
    }

    // Desenha o peixe no canvas
    render() {
        push();
        
        // Translada o sistema de coordenadas para a posição do peixe
        translate(this.pos.x, this.pos.y);
        
        // Define o modo de imagem para centralizar a imagem do peixe
        imageMode(CENTER);
        
        // Desenha a imagem do peixe no canvas com tamanho ajustado para o raio
        image(this.image, 0, 0, this.r * 2, this.r * 2); // Desenhe a imagem
        
        pop();
    }

    // Ajusta a posição do peixe para que ele reapareça na tela quando sair das bordas
    edges() {
        // Se o peixe ultrapassar a borda direita do canvas, ele reaparece do lado esquerdo
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        
        // Se o peixe ultrapassar a borda inferior do canvas, ele reaparece na borda superior
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    // Cria e retorna um array com dois novos peixes a partir do peixe atual
    breakup() {
        let newP = [];
        newP[0] = new Peixe(this.pos, this.r);
        newP[1] = new Peixe(this.pos, this.r);
        return newP;
    }
}

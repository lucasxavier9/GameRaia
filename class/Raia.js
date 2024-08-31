class Raia {
    constructor() {
        // Define a posição inicial da raia no centro do canvas
        this.pos = createVector(width / 2, height / 2);
        
        // Define o raio da raia. Pode não ser necessário se você usar uma imagem.
        this.r = 20; 
        
        // Define o ângulo de orientação inicial da raia
        this.heading = 0;
        
        // Define a rotação inicial da raia
        this.rotation = 0;
        
        // Define a velocidade inicial da raia como um vetor (0, 0)
        this.vel = createVector(0, 0);
        
        // Define o estado de impulso da raia, inicialmente sem impulso
        this.isBoosting = false;
        
        // Carrega a imagem da raia. Certifique-se de que o caminho da imagem está correto.
        this.image = loadImage('images/raia.png'); // Carregue a imagem
    }

    // Método para definir o estado de impulso da raia
    boosting(b) {
        this.isBoosting = b;
    }

    // Atualiza a posição e a velocidade da raia
    update() {
        // Se a raia está impulsionando, chama o método de impulso
        if (this.isBoosting) {
            this.boost();
        }
        
        // Adiciona a velocidade à posição da raia
        this.pos.add(this.vel);
        
        // Diminui a velocidade da raia para simular o atrito
        this.vel.mult(0.99);
    }

    // Aplica um impulso na direção do ângulo de orientação da raia
    boost() {
        // Cria um vetor de força na direção do ângulo de orientação
        let force = p5.Vector.fromAngle(this.heading);
        
        // Multiplica a força por um fator
        force.mult(0.1);
        
        // Adiciona a força à velocidade da raia
        this.vel.add(force);
    }

    // Desenha a raia no canvas usando a imagem
    render() {
        push();
        
        // Translada o sistema de coordenadas para a posição da raia
        translate(this.pos.x, this.pos.y);
        
        // Rotaciona o sistema de coordenadas de acordo com o ângulo de orientação
        rotate(this.heading + PI / 2);
        
        // Define o modo de imagem para centralizar a imagem
        imageMode(CENTER);
        
        // Desenha a imagem da raia no canvas
        image(this.image, 0, 0); // Desenhe a imagem
        
        pop();
    }

    // Ajusta a posição da raia para que ela "apareça" na tela quando sai das bordas
    edges() {
        // Se a raia ultrapassar a borda direita do canvas, ela aparece do lado esquerdo
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r;
        } else if (this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        
        // Se a raia ultrapassar a borda inferior do canvas, ela aparece na borda superior
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r;
        } else if (this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    // Define a rotação da raia
    setRotation(a) {
        this.rotation = a;
    }

    // Atualiza o ângulo de orientação da raia com base na rotação
    turn() {
        this.heading += this.rotation;
    }
}

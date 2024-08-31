let pontuacao;

function setup() {
    createCanvas(800, 600);
    

    raia = new Raia();
    pontuacao = new Pontuacao();
    
    // Um loop que itera 5 vezes para criar e adicionar instâncias da classe Peixe ao array `peixes`.
    // Cada Peixe representa um peixe individual no jogo.
    for (let i = 0; i < 5; i++) {
        peixes.push(new Peixe());
    }
  
}

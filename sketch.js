// Variáveis globais para os objetos do jogo
let raia;          // Instância da classe Raia
let peixes = [];   // Array para armazenar instâncias da classe Peixe
let choques = [];  // Array para armazenar instâncias da classe Choque
let fundo;         // Variável para armazenar a imagem de fundo
let choqueImage;

// Função que é chamada antes do setup para carregar todos os recursos
function preload() {
    // Carrega a imagem de fundo e a armazena na variável `fundo`
    fundo = loadImage('images/background.jpg');
    choqueImage = loadImage('images/choque.png');
}

// Função que é chamada uma vez quando o programa inicia
function setup() {
    // Cria um canvas com 800 pixels de largura e 600 pixels de altura
    createCanvas(800, 600);
    
    // Cria uma nova instância da classe Raia e armazena na variável `raia`
    raia = new Raia();
    
    // Cria 5 instâncias da classe Peixe e adiciona ao array `peixes`
    for (let i = 0; i < 5; i++) {
        peixes.push(new Peixe());
    }
}

// Função chamada quando uma tecla é pressionada
function keyPressed() {
    // Verifica se a tecla pressionada é a tecla de seta para a direita
    if (keyCode === RIGHT_ARROW) {
        // Define a rotação da raia para 0.1, fazendo com que ela gire para a direita
        raia.setRotation(0.1);
    } 
    // Verifica se a tecla pressionada é a tecla de seta para a esquerda
    else if (keyCode === LEFT_ARROW) {
        // Define a rotação da raia para -0.1, fazendo com que ela gire para a esquerda
        raia.setRotation(-0.1);
    } 
    // Verifica se a tecla pressionada é a tecla de seta para cima
    else if (keyCode === UP_ARROW) {
        // Define o estado de impulso da raia como verdadeiro, fazendo com que ela acelere
        raia.boosting(true);
    } 
    // Verifica se a tecla pressionada é a barra de espaço
    else if (key === ' ') {
        // Cria um novo objeto Choque na posição atual da raia e na direção em que ela está apontando
        // Adiciona o novo objeto Choque ao array de choques
        choques.push(new Choque(raia.pos, raia.heading));
    }
}

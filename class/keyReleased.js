// Função chamada quando uma tecla é liberada
function keyReleased() {
    // Define a rotação da raia como 0, parando qualquer rotação quando a tecla de rotação é liberada
    raia.setRotation(0);
    
    // Define o estado de impulso da raia como falso, parando o impulso quando a tecla de impulso é liberada
    raia.boosting(false);
}

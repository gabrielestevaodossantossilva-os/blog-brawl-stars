// Contador dos botões.

let coracao = 0;
let joinha = 0;

function curtirCoracao() {
    coracao++;
    document.getElementById("coracao").innerHTML = coracao;
    document.getElementById("coracao2").innerHTML = coracao;
    document.getElementById("coracao3").innerHTML = coracao;
}

function curtirJoinha() {
    joinha++;
    document.getElementById("joinha").innerHTML = joinha;
    document.getElementById("joinha2").innerHTML = joinha;
    document.getElementById("joinha3").innerHTML = joinha;
}

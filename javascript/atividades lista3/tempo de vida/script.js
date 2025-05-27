let inputNome = document.querySelector("#nome")
let inputIdade = document.querySelector("#idade")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#resultado")

function calcular(){
    let tempoVida = Number(inputIdade.value) * 365

    resultado.textContent = inputNome.value + ", você já viveu " + tempoVida + " dias."
}

botao.onclick = function(){
    calcular();
}
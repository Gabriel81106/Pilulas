let dias = document.querySelector("#tempo");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular(){
    let anos = Number(dias.value) / 360;
    let resto = Number(dias.value) % 360;
    let meses = resto / 30;
    let diasRestantes = resto % 30;
    
    resultado.textContent = diasRestantes + " dias, " + meses.toFixed(1) + " meses e " + anos.toFixed(2) + " anos.";
}

botao.onclick = function(){
    calcular();

}
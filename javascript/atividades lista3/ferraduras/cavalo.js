let input1 = document.querySelector("#cavalos");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular(){
    let num1 = Number(input1.value);

    resultado.textContent = num1 * 4;
}

botao.onclick = function(){
    calcular();

}
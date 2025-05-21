let input1 = document.querySelector("#pao")
let input2 = document.querySelector("#broas")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#resultado")
let resultado2 = document.querySelector("#arrecadado")

function calcular(){
    let num1 = Number(input1.value) * 0.12;
    let num2 = Number(input2.value) * 1.5;
    let valor = (num1 + num2);

    resultado.textContent = "R$ " + valor;
    resultado2.textContent = "R$ " + valor * 0.1;
}

botao.onclick = function(){
    calcular();
}
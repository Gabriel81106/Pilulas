let input1 = document.querySelector("#Gasolina")
let input2 = document.querySelector("#valor")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#resultado")

function calcular(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)

    resultado.textContent = num2 / num1 + " Litros";
}

botao.onclick = function(){
    calcular();
}
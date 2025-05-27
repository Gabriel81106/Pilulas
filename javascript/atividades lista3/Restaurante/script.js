let input = document.querySelector("#peso")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#resultado")

function calcular(){
    let num = Number(input.value)

    resultado.textContent = "R$ " + (num * 12).toFixed(2);
}

botao.onclick = function(){
    calcular();
}

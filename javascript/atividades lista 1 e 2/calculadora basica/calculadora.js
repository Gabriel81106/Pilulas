let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let botao = document.querySelector("#botao")

let resultadoSoma = document.querySelector("#resultadoSoma")
let resultadoSub = document.querySelector("#resultadoSubtracao")
let resutadoVezes = document.querySelector("#resultadoVezes")
let resultadoDivisao = document.querySelector("#resultadoDivisao")

function calcular(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)

    resultadoSoma.textContent = num1 + num2;
    resultadoSub.textContent = num1 - num2;
    resutadoVezes.textContent = num1 * num2;
    resultadoDivisao.textContent = num1 / num2;
}

botao.onclick = function(){
    calcular();
}
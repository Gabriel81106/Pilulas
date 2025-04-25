let resultado = document.querySelector('#resultado')
let botaoSoma = document.querySelector('#botaoSoma')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')

function Somar(){
    let num1 = Number(input1.value)
    let num2 = Number(input2.value)
    resultado.textContent = (num1 + num2)
}

botaoSoma.onclick = function(){
    Somar();
}
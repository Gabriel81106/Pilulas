let resultado = document.querySelector('#resultado')
let Botao = document.querySelector('#botaoCalculo')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')

function Calcular(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    resultado.textContent = (num1 - num2); 
}

Botao.onclick = function(){
    Calcular();
}
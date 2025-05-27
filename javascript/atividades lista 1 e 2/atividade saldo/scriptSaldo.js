let input1 = document.querySelector('#reajuste')
let botao = document.querySelector('#botao')
let resultado = document.querySelector('#resultado')

function calcular(){
    let porcentagem = Number(0.01);
    let saldo = Number(input1.value);
    let total = saldo * porcentagem + saldo;
    let totalFormatado = total.toFixed(2).replace('.', ',');

    resultado.textContent = "R$ " + totalFormatado;
    /*resultado.textContent = "R$ " + (saldo * porcentagem + saldo);*/
}

botao.onclick = function(){
    calcular();
}
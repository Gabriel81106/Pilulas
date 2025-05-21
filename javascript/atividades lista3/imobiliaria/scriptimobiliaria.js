let resultado = document.querySelector('#resultado');
let botao = document.querySelector('#botao');
let input1 = document.querySelector('#Comprimento');
let input2 = document.querySelector('#Largura');

function calcular(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let calculo = (num1 * num2);

    if(calculo >= 0){
        resultado.innerHTML = calculo + " m&sup2;";
    }else if(num1 < 0 || num2 < 0){
        resultado.textContent = "erro";
    }
}

botao.onclick = function(){
    calcular();
}
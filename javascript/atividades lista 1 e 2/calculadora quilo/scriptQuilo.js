let resultado = document.querySelector('#resultado')
let botao = document.querySelector('#botao')
let input2 = document.querySelector('#inputKg')
let input1 = document.querySelector('#inputvalor')


function calcular(){
    let num2 = Number(input2.value);
    let num1 = Number(input1.value);
    resultado.textContent = ("R$ " + num2 * num1 + ",00");
}

botao.onclick = function(){
    calcular();

}
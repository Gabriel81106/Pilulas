let input1 = document.querySelector("#pequena");
let input2 = document.querySelector("#media");
let input3 = document.querySelector("#grande");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcular(){
    let num1 = Number(input1.value) * 10;
    let num2 = Number(input2.value) * 12;
    let num3 = Number(input3.value) * 15;

    resultado.textContent = "O valor total da venda é: R$ " + (num1 + num2 + num3);
}

botao.onclick = function(){
    calcular();
};
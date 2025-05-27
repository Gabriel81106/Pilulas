let input1 = document.querySelector("#dia")
let input2 = document.querySelector("#mes")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#resultado")

function calcular(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    if(num2 === 1){
        resultado.textContent = "Se passaram " + num1 + " dias desde do começo do ano"
    }else{
        resultado.textContent = "Se passaram " + (num1 + (num2 * 30)) + " dias desde do começo do ano"
    }
}

botao.onclick = function(){
    calcular();
}
let input1 = document.querySelector("#input1")
let botao = document.querySelector("#botao")
let ovos = document.querySelector("#ovos")
let queijo = document.querySelector("#queijo")

function calcular(){
    let pessoas = Number(input1.value)

    ovos.textContent = (pessoas * 2);
    queijo.textContent = (pessoas * 50) + "g";
}

botao.onclick = function(){
    calcular();
};
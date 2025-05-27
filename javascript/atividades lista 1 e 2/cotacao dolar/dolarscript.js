let input = document.querySelector("#input")
let botao = document.querySelector("#botao")
let umPorcento = document.querySelector("#umPorcento")
let doisPorcento = document.querySelector("#doisPorcento")
let cincoPorcento = document.querySelector("#cincoPorcento")
let dezPorcento = document.querySelector("#dezPorcento")

function calcular(){
    let dolar = Number(input.value)
    let umP = dolar * 1.01;
    let doisP = dolar * 1.02;
    let cincoP = dolar * 1.05
    let dezP = dolar * 1.1;

    umPorcento.textContent = umP;
    doisPorcento.textContent = doisP;
    cincoPorcento.textContent = cincoP;
    dezPorcento.textContent = dezP;
}

botao.onclick = function(){
    calcular();
}
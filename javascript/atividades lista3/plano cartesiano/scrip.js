let input1Ponto1 = document.querySelector("#input1");
let input2Ponto1 = document.querySelector("#input2");
let input1Ponto2 = document.querySelector("#input3");
let input2Ponto2 = document.querySelector("#input4");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcularDistancia(){
    let x1 = Number(input1Ponto1.value);
    let y1 = Number(input2Ponto1.value);

    let x2 = Number(input1Ponto2.value);
    let y2 = Number(input2Ponto2.value);

    let distancia = ( ( (x2 - x1)**2) + ( (y2 - y1)**2) )**0.5;
    resultado.textContent = distancia;
}

botao.onclick = function(){
    calcularDistancia();
};
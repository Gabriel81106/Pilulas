let input = document.querySelector("#valor");
let botao = document.querySelector("#botao");
let resultadoCarlos = document.querySelector("#resultadoCarlos");
let resultadoAndre = document.querySelector("#resultadoAndre");
let resultadoFelipe = document.querySelector("#resultadoFelipe");

function calcular(){
    let valor = Number(input.value);
    let carlos = valor / 3;
    let felipe = valor / 3;
    
    let carlosInteiro = Math.floor(carlos);
    let felipeInteiro = Math.floor(felipe);
    
    let andre = valor / 3;
    andre = valor - (carlosInteiro + felipeInteiro);

    resultadoCarlos.textContent = "R$ " + carlosInteiro.toFixed(2);
    resultadoFelipe.textContent = "R$ " + felipeInteiro.toFixed(2);
    resultadoAndre.textContent = "R$ " + andre.toFixed(2);
}

botao.onclick = function() {
    calcular();
}
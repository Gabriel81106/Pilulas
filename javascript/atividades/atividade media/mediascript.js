let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
let botao = document.querySelector("#botao")

let media = document.querySelector("#media")
let mediaPonderada = document.querySelector("#MediaPonderada")
let somaMedias = document.querySelector("#SomaMedias")
let mediaTudo = document.querySelector("#MediaDasMedias")

function calcular(){
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let number3 = Number(input3.value);

    let somaNotas = (number1 + number2 + number3);
    let mediaNotas = (somaNotas / 3);
    media.textContent = mediaNotas;

    let ponderada1 = (number1) * 3;
    let ponderada2 = (number2) * 2;
    let ponderada3 = (number3) * 5;

    let resultadoPonderada = (ponderada1 + ponderada2 + ponderada3) / 10;
    mediaPonderada.textContent = resultadoPonderada;

    let mediasSomadas = (resultadoPonderada + mediaNotas);
    somaMedias.textContent = mediasSomadas;

    let medias = (mediasSomadas) / 2;
    mediaTudo.innerHTML = medias + "<p>calculos efetudados</p>";
}

botao.onclick = function(){
    calcular();
}
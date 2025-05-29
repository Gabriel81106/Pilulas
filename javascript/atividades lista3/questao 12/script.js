let input = document.querySelector("#input");
let botao = document.querySelector("#botao");
let centena = document.querySelector("#resultado1");
let dezena = document.querySelector("#resultado2");
let unidade = document.querySelector("#resultado3");

function calcular(){
    let num = Number(input.value);

    let centenaResultado = Math.floor(num / 100);
    let dezenaResultado = Math.floor((num % 100) / 10);
    let unidadeResultado = num % 10;

    centena.textContent = centenaResultado;
    dezena.textContent = dezenaResultado;
    unidade.textContent = unidadeResultado;
}

botao.onclick = function(){
    calcular();
}
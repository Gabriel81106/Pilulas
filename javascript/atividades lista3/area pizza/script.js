let input = document.querySelector("#input");
let botao = document.querySelector("#botao");
let resultado = document.querySelector("#resultado");

function calcularArea(){
    let raio = Number(input.value);
    let area = Math.PI * (raio**2);

    resultado.textContent = "Área da pizza: " + area.toFixed(2) + " cm²";
};

botao.onclick = function(){
    calcularArea();
}
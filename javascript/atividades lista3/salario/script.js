let input = document.querySelector("#salario");
let botao = document.querySelector("#botao");
let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let resultado3 = document.querySelector("#resultado3");

function calcular() {
    let salario = Number(input.value);
    let salarioAumentado = salario * 1.15;
    let salarioDescontado = salarioAumentado - (salarioAumentado * 0.08);

    resultado1.textContent = "Salário Inicial: R$ " + salario.toFixed(2);
    resultado2.textContent = "Salário com Aumento de 15%: R$ " + salarioAumentado.toFixed(2);
    resultado3.textContent = "Salário com Desconto do Imposto de 8%: R$ " + salarioDescontado.toFixed(2);
}

botao.onclick = function() {
    calcular();
};
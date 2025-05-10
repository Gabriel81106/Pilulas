let pepperoni = document.querySelector("#Pepperoni")
let quatroQueijo = document.querySelector("#QuatroQueijo")
let calabresa = document.querySelector("#Calabresa")
let daCasa = document.querySelector("#daCasa")
let refri = document.querySelector("#refri")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#resultado")

function calcular(){
    let num1 = Number(pepperoni.value);
    let num2 = Number(quatroQueijo.value);
    let num3 = Number(calabresa.value);
    let num4 = Number(daCasa.value);
    let num5 = Number(refri.value);

    let sabor1 = num1 * 12;
    let sabor2 = num2 * 12;
    let sabor3 = num3 * 12;
    let sabor4 = num4 * 12;
    let refrigerante = num5 * 7;
    let sabores = num1 + num2 + num3 + num4;

    if(sabores <= 4){
        resultado.textContent = "R$ " + (sabor1 + sabor2 + sabor3 + sabor4 + refrigerante) + ",00";
    }else{
        resultado.innerHTML = "<p style='font-size: 20px; color: red;'>Nossa pizza só cabe 4 sabores<br>ainda estamos averiguando um jeito de aumentar os sabores.</p>";
    }
    if(num1 < 0){
        resultado.textContent = "Não recebemos pizza, apenas vendemos"
    }if(num2 < 0){
        resultado.textContent = "Não recebemos pizza, apenas vendemos"
    }if(num3 < 0){
        resultado.textContent = "Não recebemos pizza, apenas vendemos"
    }if(num4 < 0){
        resultado.textContent = "Não recebemos pizza, apenas vendemos"
    }if(num5 < 0){
        resultado.textContent = "Não recebemos refrigerante, apenas vendemos"
    }
}


botao.onclick = function(){
    calcular()
}
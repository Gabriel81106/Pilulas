let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let botao = document.querySelector("#botao")
let resultado = document.querySelector("#nota")
let aprovacao = document.querySelector("#aprovacao")

function VerificarAprovacao(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let media = (num1 + num2) / 2;
    //Aprovado: média 6.0 ou maior
    //Reprovado: média menor que 6.0
    resultado.textContent = media

    if(media >= 6.0){
        aprovacao.textContent = "Aprovado"
    }else{
        aprovacao.textContent = "Reprovado"
    };
};

botao.onclick = function(){
    VerificarAprovacao();
};
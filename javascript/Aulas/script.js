let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let BotaoTrocaTexto = document.querySelector("#BotaoTrocaTexto")

function alterarTexto(){
    //Retirando o valor digitado no <input> e jogando na variável "textoDigitado"
    let textoDigitado = campoTexto.value;

    //atribuindo ao elemento "titulo" o texto que foi digitado no <input>
    titulo.textContent = textoDigitado;
}

//Atribuindo uma ação de clicar, no botão
BotaoTrocaTexto.onclick = function(){
    alterarTexto();
}
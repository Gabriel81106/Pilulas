let botaoXP = document.querySelector("#botaoXP")
let botaoFDD = document.querySelector("#botaoFDD")
let botaoKanban = document.querySelector("#botaoKanban")
let botaoCrystal = document.querySelector("#botaoCrystal")
let botaoMSF = document.querySelector("#botaoMSF")
let pesquisa = document.querySelector("#texto")

function TrocaTexto(index){
    let abastexto = document.querySelectorAll('.aba');
    abastexto.forEach((aba, i) => {
        if (i === index) {
            aba.style.display = 'block';
        }else {
            aba.style.display = 'none';
        }
    })
}

botaoXP.onclick = function() {
    TrocaTexto(0);
}
botaoFDD.onclick = function() {
    TrocaTexto(1);
}
botaoKanban.onclick = function() {
    TrocaTexto(2);
}
botaoCrystal.onclick = function() {
    TrocaTexto(3);
}
botaoMSF.onclick = function() {
    TrocaTexto(4);
}

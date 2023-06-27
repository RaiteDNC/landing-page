var SetaEsquerda = window.document.getElementById("SetaEsquerda")
var Bruna = window.document.getElementById("CardBruna")
var Leonardo = window.document.getElementById("CardLeonardo")
var Samantha = window.document.getElementById("CardSamantha")
var SetaDireita = window.document.getElementById("SetaDireita")


function RolarParaDireita(){
    Bruna.style = "display:none"
    Samantha.style = "display: flex"
    SetaDireita.style = "display: none"
    SetaEsquerda.style = "display: flex; margin-top: 55px"
}

function RolarParaEsquerda(){
    Bruna.style = "display:flex"
    Samantha.style = "display: none"
    SetaDireita.style = "display: flex; margin-top: 55px"
    SetaEsquerda.style = "display: none"
}
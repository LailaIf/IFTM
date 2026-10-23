import carros from "./carro.js";

let carroAtual = 0;
let idplay;

document.getElementById("imgCarro").addEventListener("mouseenter",pause);
document.getElementById("imgCarro").addEventListener("mouseout",play);

document.getElementById("tempo").addEventListener("change", function (){
    alert(document.getElementById("tempo").value)
})

function exibir(){
    document.getElementById("imgCarro").src = `${carros[carroAtual].src}`;
    document.getElementById("nome").innerHTML = carros[0].carro;
    document.getElementById("potencia").innerHTML = carros[0].potencia;
}

function atualizar(){
    if(carroAtual < carros.length -1) {
        carroAtual ++;

    } else {
        carroAtual =0;
    }
    exibir();
}

function play(){
    idplay = setInterval(atualizar, 1000);
}

function pause(){
    clearInterval(idplay)
}

play();


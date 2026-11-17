
const quarto = document.getElementById("quarto");
const personagem = document.querySelector(".personagem");
const canvas = document.getElementById("iluminacao");
const ctx = canvas.getContext("2d");

// Posição inicial do personagem
let x = 380;
let y = 190;

// Posição do mouse
let mouseX = 600;
let mouseY = 190;

// Teclas pressionadas
let teclas = {};

// Tamanho do canvas
canvas.width = quarto.clientWidth;
canvas.height = quarto.clientHeight;

// Captura o movimento do mouse
quarto.addEventListener("mousemove", function(event) {

    const posicao = quarto.getBoundingClientRect();

    mouseX = event.clientX - posicao.left;
    mouseY = event.clientY - posicao.top;

});

// Captura as teclas pressionadas
document.addEventListener("keydown", function(event) {

    teclas[event.key.toLowerCase()] = true;

});

document.addEventListener("keyup", function(event) {

    teclas[event.key.toLowerCase()] = false;

});

// Movimentação do personagem
function movimentar() {

    let velocidade = 3;

    if (teclas["w"] || teclas["arrowup"]) {
        y -= velocidade;
    }

    if (teclas["s"] || teclas["arrowdown"]) {
        y += velocidade;
    }

    if (teclas["a"] || teclas["arrowleft"]) {
        x -= velocidade;
    }

    if (teclas["d"] || teclas["arrowright"]) {
        x += velocidade;
    }

    // Impede sair do quarto
    x = Math.max(0, Math.min(x, quarto.clientWidth - personagem.offsetWidth));
    y = Math.max(0, Math.min(y, quarto.clientHeight - personagem.offsetHeight));

    personagem.style.left = x + "px";
    personagem.style.top = y + "px";

}

// Desenha a iluminação
function desenharLanterna() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Escurece o quarto inteiro
    ctx.fillStyle = "rgba(0, 0, 0, 0.94)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Centro do personagem
    let centroX = x + personagem.offsetWidth / 2;
    let centroY = y + personagem.offsetHeight / 2;

    // Direção da lanterna
    let angulo = Math.atan2(
        mouseY - centroY,
        mouseX - centroX
    );

    // Tamanho do feixe
    let distancia = 380;
    let abertura = 0.40;

    // Pontas do cone de iluminação
    let x1 = centroX + Math.cos(angulo - abertura) * distancia;
    let y1 = centroY + Math.sin(angulo - abertura) * distancia;

    let x2 = centroX + Math.cos(angulo + abertura) * distancia;
    let y2 = centroY + Math.sin(angulo + abertura) * distancia;

    // Remove a escuridão na região iluminada
    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.moveTo(centroX, centroY);
    ctx.lineTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fill();

    // Iluminação ao redor do personagem
    let luz = ctx.createRadialGradient(
        centroX, centroY, 5,
        centroX, centroY, 55
    );

    luz.addColorStop(0, "rgba(0,0,0,1)");
    luz.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = luz;
    ctx.beginPath();
    ctx.arc(centroX, centroY, 55, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = "source-over";

}

// Loop do jogo
function jogo() {

    movimentar();
    desenharLanterna();

    requestAnimationFrame(jogo);

}

jogo();

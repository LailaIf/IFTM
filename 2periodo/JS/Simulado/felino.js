gato1 = document.getElementById("gato1");
gato1.addEventListener("click", click);

function click(){
    alert(`Oi ${localStorage.getItem("primeiroNome").toUpperCase()} tudo bem com você?`);
}

gato2 = document.getElementById("gato2");
gato2.addEventListener("click", click2);

contador = 0;

function click2(){
    contador++;
    cont.innerHTML = contador;
}

gato3 = document.getElementById("gato3");
gato3.addEventListener("mouseover", substitui);
gato3.addEventListener("mouseout", volta);

function substitui(){
    gato3.src = "./Imagens/gato06.gif";
}

function volta(){
    gato3.src = "./Imagens/gato03.gif";
}


gato4 = document.getElementById("gato4");
gato4.addEventListener("mousemove", cocegas);
gato4.addEventListener("mouseout", voltaco);

function cocegas(){
    co.innerHTML = "Ai, pare de fazer cócegas!";
}

function voltaco(){
    co.innerHTML = "lá lá lá lá lá lá";
}


gerar = document.getElementById("gerar");
numgerado = document.getElementById("numgerado");

gerar.addEventListener("click", sorteio);

function sorteio() {
    n = Math.floor(Math.random() * 100) + 1;

    numgerado.value = n;
}
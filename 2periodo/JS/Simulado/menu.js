primeiroNome = localStorage.getItem("primeiroNome");
ultimoNome = localStorage.getItem("ultimoNome");

mensagem = document.getElementById("mensagem");

mensagem.innerHTML = primeiroNome + " " + ultimoNome +
    ", ";


entra = document.getElementById("entrar");

entra.addEventListener("click", abre);

function abre() {
    window.open("felino.html");
}
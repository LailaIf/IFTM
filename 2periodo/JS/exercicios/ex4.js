usuario = document.getElementById("usuario");
senha = document.getElementById("senha");
envia = document.getElementById("enviar");

envia.addEventListener("click", salvar);

function salvar(){
    localStorage.setItem("usuario", usuario.value);
    localStorage.setItem("senha", senha.value);
}
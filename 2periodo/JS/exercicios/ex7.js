usuario = document.getElementById("usuario");
senha = document.getElementById("senha");
envia = document.getElementById("enviar");

vetor = [];

envia.addEventListener("click", salva);

function salva(){

    vetor.push({usuario: usuario.value, senha: senha.value});

    localStorage.setItem("vetor", JSON.stringify(vetor));
}




usuario = document.getElementById("usuario");
senha = document.getElementById("senha");
envia = document.getElementById("enviar");

vetor = [];

envia.addEventListener("click", salva);

function salva(){

    existe = false;

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i].usuario === usuario.value) {
            existe = true;
        }
    }
    if(existe){ //nao faz nada
    } 
    else {

    vetor.push({usuario: usuario.value, senha: senha.value});

    localStorage.setItem("veto", JSON.stringify(vetor));
}


}

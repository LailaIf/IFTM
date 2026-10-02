
usuario = document.getElementById("usuario");
senha = document.getElementById("senha");
envia = document.getElementById("enviar");

vetor = JSON.parse(localStorage.getItem("vetors")) || [];

envia.addEventListener("click", salva);

function salva(){

    existe = false;

    for (let i = 0; i < vetor.length; i++) {

        if (vetor[i].usuario === usuario.value) {
            existe = true;
        }
    }
    if(existe){ 
        document.write("USUÁRIO JÁ EXISTENTE");
    } 
    else {

    vetor.push({usuario: usuario.value, senha: senha.value});

    localStorage.setItem("vetors", JSON.stringify(vetor));

    document.write("USUÁRIO INEXISTENTE")
}


}

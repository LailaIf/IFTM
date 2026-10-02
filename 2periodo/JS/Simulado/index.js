resposta = confirm("Olá, seja bem-vindo!");

if (resposta == true) {

    nome = document.getElementById("nome");

    entrar = document.getElementById("entrar");

    entrar.addEventListener("click", validar);

    function validar() {

        vet = nome.value.split(" ");

        if (vet.length >= 2) {

            localStorage.setItem("primeiroNome", vet[0]);
            localStorage.setItem("ultimoNome", vet[vet.length - 1]);

            window.open("menu.html", "_blank");

        } else {

            alert("Informe pelo menos NOME + SOBRENOME");

        }
    }

} else {

    alert("Clique em OK para ver a página");

}
document.getElementById("valida").addEventListener("click" , function () {
    validar();
})

function validar() {
    // padrao valida se ha pelo menos 1 numero em qualquer lugar
    // let padrao = /\d/;
    // padrao valida se ha pelo menos 1 numero no comeco
    // let padrao = /^\d/;
    // padrao valida se ha pelo menos 1 numero no final
    // let padrao = /\d$/;
    // padrao valida se ha exatamente 1 numero
    // let padrao = /^\d$/;
    // padrao valida se ha exatamente 2 numeros
    // let padrao = /^\d\d$/;
    // padrao valida se ha exatamente 11 numeros
    // let padrao = /^\d{11}$/;
    // padrao valida se ha 2 ou 3 numeros
    // let padrao = /^\d{2,3}$/;
    // padrao valida se ha no minimo 2 numeros
    // let padrao = /^\d{2,}$/;
    // padrao torna o numero opcional
    // let padrao = /^\d{0,1}$/;
    // padrao valida um numero de telefone com ddd
    // let padrao /^\d{2,3}\s\d{4,5}-\d{4}$/;
    //let padrao = /^\(\d{2,3}\)\s\d{4,5}-\d{4}$/;
    // para cpf let padrao = /\d{3}\.\d{3}\.\d{3}-\d/;
    //padrao = /^[A-z]{2,8}$/;
    //padrao = /\d{1,}[*+-]\d{0,1} ou ? para opcional0ou1 ou *pra 0oumuitos/;
    // alfanumerico e W para simbolos especias, nega a letra minuscula padrao = /\w{2,5}/;
    padrao = /\d{0,1}/;
    let texto = document.getElementById("texto").value;
    if (padrao.test(texto)) {
        alert("Válido");
    } else {
        alert("Inválido");
    }
}
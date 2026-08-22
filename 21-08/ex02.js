nome = prompt("Digite seu nome completo.").trim();

if(nome!=null){
    if(nome!=""){
        document.write(`<p>${nome}</p>`);
        document.write(`<p>${nome} tem ${nome.length} caracteres.</p>`);
        
    } else{
        document.write("Nome invalido.");
    }
}
texto = prompt("Digite um texto.").split(" ");
letra = prompt("Digite a letra para encontrar palavras que comecem com ela. ");


localizar = texto.charaAt(`${letra}`);
textoNovo = texto.replace(localizar);

document.write(textoNovo);
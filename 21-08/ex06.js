nome = prompt("Digite seu nome completo.").split(" ");

primeiro = nome[0];

ultimo = nome[nome.length-1];

nomeNovo = `${primeiro} ${ultimo}`;

document.write(nomeNovo);




nome = prompt("Digite seu nome completo.");

//transformar string em um vetor de letras minusculas
nomeCompleto = nome.toLowerCase().split(" ");

//transformar primeira posição do vetor em letra maiuscula
nomeCompleto[0] = nomeCompleto[0].toUpperCase();

//alert com primeiro nome maiusculo e transformando o vetor devolta em string
alert(nomeCompleto.join(" "));


/*for(let i=1; i<nomeMudado.length; i++){
    alert(nomeMudado[0].toUpperCase() + nomeMudado[i]);
}*/
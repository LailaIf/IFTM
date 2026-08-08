primeiro = parseFloat(prompt("Informe sua nota do 1° bimestre."));
segundo = parseFloat(prompt("Informe a nota do 2° bimestre."));

if((primeiro+segundo)>=60)
    alert("Voce foi APROVADO");
else
    alert(`Voce foi REPROVADO. Faltam ${60-(primeiro+segundo)} pontos para ser aprovado.`);


nome = prompt("Informe seu nome completo");
idade = prompt("Informe sua idade");


if(idade>=18){
    alert(`${nome}, você já possui idade para tirar a carteira de motorista.`);
}else 
    alert(`${nome}, você não possui idade para tirar a carteira de motorista. Ainda faltam ${18-idade} anos`);
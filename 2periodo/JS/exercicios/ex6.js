vetor = [{usuario: "laila", senha: "1222"},{usuario: "loilo", senha: "1333"},{usuario: "leila", senha: "1444"}];

localStorage.setItem("usuario", JSON.stringify(vetor));

for(let i=0; i<vetor.length; i++){
    document.write(vetor[i].usuario + "<br>");
    document.write(vetor[i].senha + "<br><br>");
}

let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuario");

while(nomeUsuario ==""){
    nomeUsuario = prompt("qual seu  nome?")
}

if(nomeUsuario == null){
    elemento.textContent = "Seja muito Bem-Vindo";
}
else {
    elemento.textContent = nomeUsuario;
}


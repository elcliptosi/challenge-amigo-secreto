let amigos = [];
let inputAmigos = document.getElementById("amigo");
let ulListaAmigos = document.getElementById("listaAmigos");
let ulresultado = document.getElementById("resultado");
//funcion para agregar amigos 
function agregarAmigo() {
    if (inputAmigos.value == "") {
        alert("Ingresa un nombre");
    }else{
    amigos.push(inputAmigos.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
    }
}

//funcion para sortear amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("introdusca al menos 2 nombres");
    }else{
    let sorteoEntreAmigos = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[sorteoEntreAmigos];
    ulresultado.innerHTML += `<li>el amigo secreto es:${amigoSecreto}</li>`;
    }
}
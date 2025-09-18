let inputAmigos = document.getElementById("amigo");
let baseDeDatosAmigos = [];
let baseDeDatosMuestra = document.getElementById("listaAmigos");
let tuAmigoSecretoEs = document.getElementById("resultado");

function agregarAmigo() {
    let nombre = inputAmigos.value.trim(); 

    // Verificar de campo
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Verificar existencia del nombre en lista
    if (baseDeDatosAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Añade el nombre
    baseDeDatosAmigos.push(nombre);
    console.log(baseDeDatosAmigos);

    actualizarLista();
    limpiarCaaja();
}

// Limpiar caja
function limpiarCaaja(){
    let valorCaja = document.getElementById("amigo");
     valorCaja.value = "";

}
// limpia la lista, crear arreglo
function actualizarLista() {
    baseDeDatosMuestra.innerHTML = "";
    let elementosLista = [];
    //  Iterar en el arreglo
    for (let i = 0; i < baseDeDatosAmigos.length; i++) {
        let amigo = baseDeDatosAmigos[i];
        
        // Crear un string con  <li> por cada agregado a lista
        elementosLista.push(`<li>${amigo}</li>`);
    }

    // Unir todos los elementos <li> en un solo string y asignarlo inner
    baseDeDatosMuestra.innerHTML = elementosLista.join("");
}

function sortearAmigo() {
    if (baseDeDatosAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let random = Math.floor(Math.random() * baseDeDatosAmigos.length);
    let amigoSecreto = baseDeDatosAmigos[random];
    tuAmigoSecretoEs.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}
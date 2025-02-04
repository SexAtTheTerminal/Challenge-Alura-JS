let amigosSecretos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigosSecretos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigosSecretos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigosSecretos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigosSecretos.length);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>🎉 Amigo Secreto: ${amigosSecretos[indiceSorteado]} 🎉</li>`;
}
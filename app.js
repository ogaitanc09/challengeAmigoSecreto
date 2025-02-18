// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === ''){
        alert('Por favor, inserte su nombre');
    } else {
        amigos.push(nombre);
        //console.log(amigos);
        document.getElementById('amigo').value = '';
    }
    listaAmigos();

    return;
}

function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

agregarAmigo();
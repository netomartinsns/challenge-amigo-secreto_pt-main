//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


const amigos = [];

function adicionarAmigo() {
const nomeInput = document.getElementById('amigo');
const nome = nomeInput.value.trim();
if (nome) {
amigos.push(nome);
atualizarLista();
nomeInput.value = '';
}
}

function atualizarLista() {
const lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
amigos.forEach(amigo => {
const li = document.createElement('li');
li.textContent = amigo;
lista.appendChild(li);
});
}
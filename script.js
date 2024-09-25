// Lista de candidatos fictícios
const candidatos = {
    "44123": { nome: "Ivan Silva", foto: "ivan.jpeg" },
    "": { nome: "Candidato B", foto: "candidatoB.jpg" }
};

// Exibir a foto do candidato ao digitar o número
document.getElementById('numeroCandidato').addEventListener('input', function() {
    const numero = this.value;
    const fotoCandidatoDiv = document.getElementById('fotoCandidato');
    fotoCandidatoDiv.innerHTML = ''; // Limpa a área de foto

    if (candidatos[numero]) {
        const img = document.createElement('img');
        img.src = candidatos[numero].foto;
        fotoCandidatoDiv.appendChild(img);
    }
});

// Função para confirmar o voto
function confirmarVoto() {
    const numero = document.getElementById('numeroCandidato').value;
    const mensagemDiv = document.getElementById('mensagem');
    
    if (candidatos[numero]) {
        mensagemDiv.innerText = `Voto confirmado para ${candidatos[numero].nome}. Fim.`;
    } else {
        mensagemDiv.innerText = "Número inválido!";
    }
}

// Função para corrigir o voto
function corrigirVoto() {
    document.getElementById('numeroCandidato').value = '';
    document.getElementById('fotoCandidato').innerHTML = '';
    document.getElementById('mensagem').innerText = '';
}

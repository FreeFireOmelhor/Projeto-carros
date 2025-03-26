const veiculos = document.querySelectorAll('#selecao-veiculo img');
const ligarBtn = document.getElementById('ligar');
const acelerarBtn = document.getElementById('acelerar');
const frearBtn = document.getElementById('frear');
const desligarBtn = document.getElementById('desligar');
const turboBtn = document.getElementById('turbo');
const carregarBtn = document.getElementById('carregar');
const descarregarBtn = document.getElementById('descarregar');
const buzinarBtn = document.getElementById('buzinar');  // Botão da buzina
const statusDiv = document.getElementById('status');
const velocimetroSpan = document.querySelector('#velocimetro span'); // Velocímetro
const buzinaSom = new Audio('buzina.mp3'); // Cria um objeto de áudio (coloque o arquivo na mesma pasta do HTML)

let veiculoSelecionado = null;
let ligado = false;
let velocidade = 0;
let carga = 0;

function atualizarStatus() {
    statusDiv.textContent = `Veículo: ${veiculoSelecionado ? veiculoSelecionado : 'Nenhum'} | Ligado: ${ligado} | Velocidade: ${velocidade} km/h | Carga: ${carga}`;
    atualizarVelocimetro(); // Atualiza o velocímetro também
}

function atualizarVelocimetro() {
    velocimetroSpan.textContent = velocidade;
}

function mostrarBotoesEspecificos() {
    turboBtn.style.display = 'none';
    carregarBtn.style.display = 'none';
    descarregarBtn.style.display = 'none';

    if (veiculoSelecionado === 'esportivo') {
        turboBtn.style.display = 'inline-block';
    } else if (veiculoSelecionado === 'caminhao') {
        carregarBtn.style.display = 'inline-block';
        descarregarBtn.style.display = 'inline-block';
    }
}

veiculos.forEach(veiculo => {
    veiculo.addEventListener('click', () => {
        veiculoSelecionado = veiculo.dataset.veiculo;
        atualizarStatus();
        mostrarBotoesEspecificos();
    });
});

ligarBtn.addEventListener('click', () => {
    if (veiculoSelecionado) {
        ligado = true;
        atualizarStatus();
    } else {
        alert('Selecione um veículo primeiro!');
    }
});

desligarBtn.addEventListener('click', () => {
    ligado = false;
    velocidade = 0;
    atualizarStatus();
});

acelerarBtn.addEventListener('click', () => {
    if (ligado) {
        velocidade += 10;
        atualizarStatus();
    }
});

frearBtn.addEventListener('click', () => {
    if (velocidade > 0) {
        velocidade -= 10;
        atualizarStatus();
    }
});

turboBtn.addEventListener('click', () => {
    if (ligado && veiculoSelecionado === 'esportivo') {
        velocidade += 50;
        atualizarStatus();
    }
});

carregarBtn.addEventListener('click', () => {
    if (ligado && veiculoSelecionado === 'caminhao') {
        carga += 20;
        atualizarStatus();
    }
});

descarregarBtn.addEventListener('click', () => {
    if (ligado && veiculoSelecionado === 'caminhao' && carga > 0) {
        carga -= 20;
        atualizarStatus();
    }
});

buzinarBtn.addEventListener('click', () => {
    if (ligado && veiculoSelecionado) {
        buzinaSom.play(); // Toca o som
    }
});

atualizarStatus(); // Inicializa o status
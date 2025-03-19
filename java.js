class Carro {
    constructor() {
        this.ligado = false;
        this.velocidade = 0;
    }
    ligar() { this.ligado = true; }
    desligar() { this.ligado = false; this.velocidade = 0; }
    acelerar() { if (this.ligado) this.velocidade += 30; }
  }
  class CarroEsportivo extends Carro {
    constructor() {
        super();
        this.turboAtivado = false;
    }
    ativarTurbo() { if (this.ligado) { this.velocidade += 80; this.turboAtivado = true; } }
  }
  
  class Caminhao extends Carro {
    constructor() {
        super();
        this.cargaAtual = 0;
        this.capacidadeCarga = 40;
    }
    carregar() { if (this.cargaAtual < this.capacidadeCarga) this.cargaAtual += 5; }
    descarregar() { this.cargaAtual = 0; }
    buzinar() { document.getElementById("buzinaCaminhao").play(); }
  }

  let carroEsportivo = new CarroEsportivo();
  let caminhao = new Caminhao();
 
  
  function atualizarStatus() {
    document.getElementById("statusCarro").innerText = `Velocidade: ${carroEsportivo.velocidade} km/h`;
    document.getElementById("statusCaminhao").innerText = `Carga: ${caminhao.cargaAtual}/${caminhao.capacidadeCarga} toneladas`;
  }
  
  function ligarCarro() { carroEsportivo.ligar(); atualizarStatus(); }
  function desligarCarro() { carroEsportivo.desligar(); atualizarStatus(); }
  function acelerarCarro() { carroEsportivo.acelerar(); atualizarStatus(); }
  function ativarTurbo() { carroEsportivo.ativarTurbo(); atualizarStatus(); }
  function ligarCaminhao() { caminhao.ligar(); atualizarStatus(); }
  function desligarCaminhao() { caminhao.desligar(); atualizarStatus(); }
  function carregarCaminhao() { caminhao.carregar(); atualizarStatus(); }
  function descarregarCaminhao() { caminhao.descarregar(); atualizarStatus(); }
  function buzinarCaminhao() { caminhao.buzinar(); }
  
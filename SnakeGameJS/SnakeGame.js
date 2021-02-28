let canvas = document.getElementById("snake");
//reenderiza o desenho dentro do canvas
let context = canvas.getContext("2d");
//32 pixel cada quadrado em que o jogo sera montado
let box = 32;

//function starting canvas
function criarBG() {
  //fillStyle trabalha com o canvas,contexto
  context.fillStyle = "lightgreen";
  //fillRect desenha o retangulo onde ira acontecer o jogo
  context.fillRect(0, 0, 16 * box, 16 * box);
}
criarBG();
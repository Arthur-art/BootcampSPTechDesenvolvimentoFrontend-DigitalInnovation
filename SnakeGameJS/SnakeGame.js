let canvas = document.getElementById("snake");
//reenderiza o desenho dentro do canvas
let context = canvas.getContext("2d");
//32 pixel cada quadrado em que o jogo sera montado
let box = 64;
/*A cobra do jogo sera feita com um array de coordenadas, a cobra irá andar da seguinte forma:
"adiciona um dado e retira o ultimo"*/
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
//variavel com a direção que queremos que a snake tenha
let direction = "right";

//function starting canvas
function createBG() {
  //fillStyle trabalha com o canvas,construindo o background da aplicacao
  context.fillStyle = "#222733";
  //fillRect desenha o retangulo onde ira acontecer o jogo
  context.fillRect(0, 0, 32 * box, 32 * box);
}

function createSnake() {
  /*O for irá percorrer todo o tamanho do array e vai incrementar, quando ele for incrementado 
  ele ira pintar o corpo da snake de verde e ira setar o tamanho dela corretamente*/
  for (i = 0; i < snake.length; i++) {
    //cor snake
    context.fillStyle = "#7FFFD4";
    //tamanho snake
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

//Function que atualiza o jogo de tempos em tempos
function startGame() {
  createBG();
  createSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //coordenadas da snake
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  //retira o ultimo elemento do array pop()
  snake.pop();

  //Cabeça da snake
  let newHead = {
    x: snakeX,
    y: snakeY,
  };
  //unshift adiciona um item no comeco do array
  snake.unshift(newHead);
}

//Intervalo de 100 milisegundos para iniciar o jogo e renovar o mesmo
let game = setInterval(startGame, 100);

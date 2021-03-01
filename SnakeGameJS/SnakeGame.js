let canvas = document.getElementById("snake");
//reenderiza o desenho dentro do canvas
let context = canvas.getContext("2d");
//32 pixel cada quadrado em que o jogo sera montado
let box = 32;
/*A cobra do jogo sera feita com um array de coordenadas, a cobra irá andar da seguinte forma:
"adiciona um dado e retira o ultimo"*/
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
};
//variavel com a direção que queremos que a snake tenha
let direction = "right";
//Math.floor retorna um numero aleatorio ate 1 onde surgira a food
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

//function starting canvas
function createBG() {
  //fillStyle trabalha com o canvas,construindo o background da aplicacao
  context.fillStyle = "#222733";
  //fillRect desenha o retangulo onde ira acontecer o jogo
  context.fillRect(0, 0, 16 * box, 16 * box);
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

//funcao que irá desenhar a comida
function drawFood() {
  context.fillStyle = "#A52A2A";
  context.fillRect(food.x, food.y, box, box);
}

//pega o keydown(evento de click do teclado) e chama update()
document.addEventListener("keydown", update);

//movimento controlado pelo teclado
function update(event) {
  if (event.keyCode == 37 && direction != "right") direction = "left";
  if (event.keyCode == 38 && direction != "down") direction = "up";
  if (event.keyCode == 39 && direction != "left") direction = "right";
  if (event.keyCode == 40 && direction != "up") direction = "down";
}

//Function que atualiza o jogo de tempos em tempos
function startGame() {

  //atravessando as paredes com a snake no plano cartesiano
  if (snake[0].x > 16 * box && direction == "right") snake[0].x = 0;
  if (snake[0].x < 0 && direction == "left") snake[0].x = 15 * box;
  if (snake[0].y > 16 * box && direction == "down") snake[0].y = 0;
  if (snake[0].y < 0 && direction == "up") snake[0].y = 15 * box;

  //Encerrando o jogo caso a posicao da cabeca da snake seja a mesma do corpo na posicao de indice do array
  for(i=1; i<snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(game);
      alert('Game Over');
    }
  }

  createBG();
  createSnake();
  drawFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //coordenadas da snake
  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  //aumentando a snake conforme ela passa pela food
  if(snakeX != food.x || snakeY != food.y){
    snake.pop();
  }else{
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  //Cabeça da snake
  let newHead = {
    x: snakeX,
    y: snakeY
  };
  //unshift adiciona um item no comeco do array
  snake.unshift(newHead);
}

//Intervalo de milisegundos para iniciar o jogo e renovar o mesmo
let game = setInterval(startGame, 100);

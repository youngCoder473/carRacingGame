var database;
var gameState = 0
var playerCount = 0
var game,form,player,allPlayers;
var car1,car2,car3,car4,carArray

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-20);
  game = new Game();
  game.getGameState();
  game.start();
  carArray = [];
}

function draw(){
  if(playerCount==4){
    game.updateGameState(1);
  }
  if(gameState == 1){
    clear();
    game.play();
  }
}

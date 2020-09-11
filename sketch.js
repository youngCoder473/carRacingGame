var database;
var gameState = 0
var playerCount = 0
var game,form,player,allPlayers;
var car1,car2,car3,car4,carArray
var car1Img,car2Img,car3Img,car4Img,trackImg;

function preload(){
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
trackImage = loadImage("images/track.jpg");
}

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
  if(gameState == 2){
    game.end();
  }
}

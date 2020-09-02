class Game{
    constructor(){
    }
    getGameState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        });
    }
    updateGameState(state){
        database.ref("/").update({
            gameState:state
        });
    }
    async start(){
        if(gameState==0){
            form = new Form()
            player = new Player()
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        carArray.push(car1);
        carArray.push(car2);
        carArray.push(car3);
        carArray.push(car4);
    }
    play(){
        form.hide();
        text("Start!",200,200);
        Player.getPlayerInfo();
        if(allPlayers != undefined){
            var arrayIndex = 0
            var x = 0
            var y = 0
            var displayPosition = 130;
            for(var i in allPlayers){
                arrayIndex +=1
                x +=200
                y = displayHeight-allPlayers[i].distance;
                carArray[arrayIndex-1].x = x;
                carArray[arrayIndex-1].y = y;
                if(arrayIndex == player.playerCountPosition){
                    carArray[arrayIndex-1].shapeColor = "red"
                    camera.position.x = displayWidth/2
                    camera.position.y = carArray[arrayIndex-1].y;
                }
                else{
                    carArray[arrayIndex-1].shapeColor = "black"
                }
                
            }
        }
        if(keyDown(UP_ARROW) && player.playerCountPosition!=null){
            player.distance+=50;
            player.updatePlayer();
        }
        drawSprites();
    }
}
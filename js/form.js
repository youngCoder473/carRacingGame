class Form{
    constructor(){
         this.input = createInput("name");
         this.button = createButton("play");
         this.greeting = createElement("h2");
         this.title = createElement("h2");
         this.reset = createButton("reset");
    }
    display(){
       this.title.html("Car Racing Game");
       this.title.position(displayWidth/2,0);
        
      this.input.position(displayWidth/2-300,displayHeight/2-200);

      this.button.position(displayWidth/2-150,displayHeight/2-200);

      this.reset.position(displayWidth-100,20);

      this.reset.mousePressed(()=>{
          player.updatePlayerCount(0);
          game.updateGameState(0);
          database.ref("/").child("Players").remove()
      })
    

      this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();
           player.name = this.input.value();
           this.greeting.html("hello"+player.name)
           this.greeting.position(displayWidth/2-70,displayHeight/4);
           playerCount++
           player.playerCountPosition = playerCount;
           player.updatePlayer(player.name);
           player.updatePlayerCount(playerCount);
       })
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
}
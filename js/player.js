class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.playerCountPosition = null;
        this.rank = 0
    }
    getPlayerCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount = data.val();
        });
    }
    updatePlayerCount(count){
        database.ref("/").update({
            playerCount:count
        });
    }
    updatePlayer(){
        var playerIndex = "Players/player"+this.playerCountPosition
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getPlayerInfo(){
        database.ref("Players").on("value",function(data){
            allPlayers = data.val();
        })
    }
     getCarReached(){
        database.ref("carReached").on("value",function(data){
            carReached = data.val();
        })

    }
    static updateCarReached(count){
        database.ref("/").update({
         carReached:count
       })
    }
}
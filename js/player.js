class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.playerCountPosition = null;
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
}
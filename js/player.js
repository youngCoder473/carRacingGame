class Player{
    constructor(){

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
    updatePlayer(name){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:name
        })
    }
}
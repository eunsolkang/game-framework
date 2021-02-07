class GameStateManager{
    constructor(){
        this.gameState = new GameStartState();
    }
    
    onChangeGameState(gameState){
        this.gameState = gameState;
    }

    render(){
        this.gameState.render();
    }

    update(){
        this.gameState.update();
    }
}

const gameStateManager = new GameStateManager();
class GameStateManager{
    constructor(){
        this.gameState = new GameStartState();
    }
    
    onChangeGameState(gameState){
        this.gameState = gameState;
        this.gameState.init();
    }

    render(){
        this.gameState.render();
    }

    update(){
        this.gameState.update();
    }
}

const gameStateManager = new GameStateManager();
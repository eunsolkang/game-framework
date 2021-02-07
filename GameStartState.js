class GameStartState{
    constructor(){

    }
    init(){

    }
    render(){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.fillText('시작!', 100, 100);
    }
    update(){
        if ( inputSystem.isKeyDown('Space') ){
            gameStateManager.onChangeGameState(new GamePlayState());
        }
    }
}
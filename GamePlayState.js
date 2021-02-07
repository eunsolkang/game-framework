class GamePlayState{
    constructor(){
        this.player = new Player(0, 0);
    }
    init(){
        this.player.init();
    }
    render(){
        this.player.render();
    }
    update(){
        this.player.update();
        if(inputSystem.isKeyDown('KeyD')){
            this.player.moveRight();
        }
        if(inputSystem.isKeyDown('KeyA')){
            this.player.moveLeft();
        }
        if(inputSystem.isKeyDown('KeyW')){
            this.player.moveUp();
        }
        if(inputSystem.isKeyDown('KeyS')){
            this.player.moveDown();
        }
    }
}
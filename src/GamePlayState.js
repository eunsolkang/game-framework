class GamePlayState{
    constructor(){
        this.player = new Player(0, 0);
        this.otherPlayer = new OtherPlayer(0, 0);
    }
    init(){
        this.player.init();
        socket.on('move', (position) => {
            console.log('받아?');
            this.otherPlayer.setPosition(position.x, position.y);
        });
    }
    render(){
        this.player.render();
        this.otherPlayer.render();
    }
    update(){
        this.player.update();
        this.otherPlayer.update();
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
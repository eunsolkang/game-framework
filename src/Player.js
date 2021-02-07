class Player{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    init(){

    }
    render(){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 100, 100);
    }
    update(){
        
    }
    moveLeft(){
        this.x -= 10;
        socket.emit('move', {x : this.x, y: this.y});
    }
    moveRight(){
        this.x += 10;
        socket.emit('move', {x : this.x, y: this.y});
    }
    moveUp(){
        this.y -= 10;
        socket.emit('move', {x : this.x, y: this.y});
    }
    moveDown(){
        this.y += 10;
        socket.emit('move', {x : this.x, y: this.y});
    }
}
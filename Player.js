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
    }
    moveRight(){
        this.x += 10;
    }
    moveUp(){
        this.y -= 10;
    }
    moveDown(){
        this.y += 10;
    }
}
const player = new Player();
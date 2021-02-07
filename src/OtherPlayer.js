class OtherPlayer{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    init(){

    }
    render(){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, 100, 100);
    }
    update(){

    }
    setPosition(x, y){
        this.x = x;
        this.y = y;
    }
}
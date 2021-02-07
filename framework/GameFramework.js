
function Update(){
    gameStateManager.update();
}
function Render(){
    var canvas = document.getElementById("canvas");
    var ctx  = canvas.getContext("2d");

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    gameStateManager.render();
}

function gameLoop(){
    Update();
    Render();
    window.requestAnimationFrame(gameLoop);
}
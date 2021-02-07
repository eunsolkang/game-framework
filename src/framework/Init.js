let canvasHeight;
let canvasWidth;

window.addEventListener("load", onGameInit, false);

function onGameInit(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

   gameLoop();
}
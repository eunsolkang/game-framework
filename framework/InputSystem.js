window.addEventListener('keydown', () => {
    inputSystem.isKeyPressed[e.keyCode] = true;
});
window.addEventListener('keyup', () => {
    inputSystem.isKeyPressed[e.keyCode] = false;
});

class InputSystem{
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.isKeyPressed = [];
    }

    isKeyDown(keyCode){
        if( this.isKeyPressed[keyCode] === true ){
          return true;
        }
        else{
            return false;
        }
    }
    
    get mouseX(){
        return this.mouseX;
    }

    get mouseY(){
        return this.mouseY;
    }
}

const inputSystem = new InputSystem();
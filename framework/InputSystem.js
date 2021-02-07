window.addEventListener('keydown', (e) => {
    inputSystem.isKeyPressed[e.code] = true;
});
window.addEventListener('keyup', (e) => {
    inputSystem.isKeyPressed[e.code] = false;
});

class InputSystem{
    constructor() {
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
    
    
}

const inputSystem = new InputSystem();
const ball = document.querySelector('.ball');

let positionX = 0;
let positionY = 0;
let diffX = 5;
let diffY = 5;

const interval = setInterval(function() {
    const gamearea = document.querySelector('.game-area');
    
    ball.style.left = positionX + "px"; 
    ball.style.top = positionY + "px";   
    positionX = positionX + diffX;
    positionY = positionY + diffY;

    if (positionX >= gamearea.clientWidth - 20 || positionX < 1) {
        diffX = diffX * -1;
    }

    if (positionY >= gamearea.clientHeight - 20 || positionY < 1) { 
        diffY = diffY * -1;
    }

}, 10);

let player = {
    mouseDirectionX: 0,
    mouseDirectionY: 0
};
let startGameBtn;
let menuPlatform;
let inputField;
let playingField;
let circle;
let context;
let offsetY;
let offsetX;
document.addEventListener("DOMContentLoaded", function() {
    playingField = document.getElementById("playArea");
    playingField.width = 10000;
    playingField.height = 10000;
    playingField.margin = "0";
    context = playingField.getContext("2d");
    offsetY = (playingField.height/2);
    offsetX = (playingField.width/2);

    inputField = document.getElementById("nameInput");
    inputField.setAttribute("placeholder", "Add name here...");

    startGameBtn = document.getElementById("startGame");
    startGameBtn.addEventListener("click", function() {
        startGame();
    });
    drawBoard();
});

function startGame(){
    menuPlatform = document.getElementById("screen");
    menuPlatform.style.display = "none";
}

function drawBoard(){
    for (let x = 0; x <= playingField.width+offsetX; x += 40) {
        context.moveTo(0.5 + x + 10, 10);
        context.lineTo(0.5 + x + 10, playingField.height+offsetY + 10);
    }

    for (let x = 0; x <= playingField.height+offsetY; x += 40) {
        context.moveTo(10, 0.5 + x + 10);
        context.lineTo(playingField.width+offsetX + 10, 0.5 + x + 10);
    }
    context.strokeStyle = "gray";
    context.lineWidth = 0.3;
    context.stroke();
}
let player = {
    positionY: 0,
    positionX: 0,
    score: 0,
    name: ""
};
let startGame;
let menuPlatform;
let inputField;
document.addEventListener("DOMContentLoaded", function() {
    inputField = document.getElementById("nameInput");
    inputField.setAttribute("placeholder", "Add name here...");
    startGame = document.getElementById("startGame");
    startGame.addEventListener("click", function() {
        playGame();
    })

});

function playGame(){
    menuPlatform = document.getElementById("screen");
    menuPlatform.style.display = "none";
}
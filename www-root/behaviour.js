let player = {
    positionY: 0,
    positionX: 0,
    score: 0,
    name: ""
};
let startGameBtn;
let menuPlatform;
let inputField;
let playingField;
let circle;
document.addEventListener("DOMContentLoaded", function() {
    inputField = document.getElementById("nameInput");
    inputField.setAttribute("placeholder", "Add name here...");

    startGameBtn = document.getElementById("startGame");
    startGameBtn.addEventListener("click", function() {
        startGame();
    })

});

function startGame(){
    menuPlatform = document.getElementById("screen");
    menuPlatform.style.display = "none";
}
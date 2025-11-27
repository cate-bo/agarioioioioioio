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
let scale = 1;
let screen;
let playStart = false;
let vecX, vecY;
let calcVecX, calcVecY;
document.addEventListener("DOMContentLoaded", function() {
    playingField = document.getElementById("playArea");
    playingField.width = 10000;
    playingField.height = 10000;
    playingField.margin = "0";
    context = playingField.getContext("2d");
    offsetY = (playingField.height / 2);
    offsetX = (playingField.width / 2);
    screen = document.getElementById("whole");

    inputField = document.getElementById("nameInput");
    inputField.setAttribute("placeholder", "Add name here...");

    startGameBtn = document.getElementById("startGame");
    startGameBtn.addEventListener("click", function () {
        startGame();
    });
    setInterval(calcDirection, 33);
    drawBoard();
    if (playStart) {
        /*document.addEventListener("wheel", (event) => {
            event.preventDefault();
            scale += event.deltaY * -0.0009;
            scale = Math.min(Math.max(0.85, scale), 1.6);
            screen.style.transform = `zoom(${scale})`;
            console.log("scale", scale);
            console.log(window.scrollX);
            console.log(window.scrollY);
        }, {passive: false});
        play();*/
    }
    document.addEventListener("mousemove", (event) => {
        vecX = event.clientX - 800;
        vecY = event.clientY - 1000;
    });
});


function startGame(){
    menuPlatform = document.getElementById("screen");
    menuPlatform.style.display = "none";

    //Koordinaten vom Server für den Spawn hier rein
    window.scrollTo(800 - window.innerWidth/2, 1000 - window.innerHeight/2);
    playStart = true;
    console.log(playStart);
    play();
}


function play() {
    context.beginPath();
    context.arc(800, 1000,80,0,2*Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

//Methode für das Zeichnen des Grids auf dem Spielfeld
function drawBoard(){
    for (let x = 0; x <= playingField.width; x += 40) {
        context.moveTo(0.5 + x + 10, 10);
        context.lineTo(0.5 + x + 10, playingField.height + 10);
    }

    for (let x = 0; x <= playingField.height; x += 40) {
        context.moveTo(10, 0.5 + x + 10);
        context.lineTo(playingField.width + 10, 0.5 + x + 10);
    }
    context.strokeStyle = "gray";
    context.lineWidth = 0.3;
    context.stroke();
}

//Methode für das Berechnen des Vektors von 1 bis -1 für die X Achse und die Y Achse
function calcDirection() {
    calcVecX = (vecX / ((Math.abs(vecX) + Math.abs(vecY))));
    calcVecY = (vecY / ((Math.abs(vecX) + Math.abs(vecY))));
    console.log("x:" + (calcVecX));
    console.log("y:" + (calcVecY));
    console.log(Math.abs(calcVecX) + Math.abs(calcVecY));
}

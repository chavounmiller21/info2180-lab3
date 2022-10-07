window.onload = function() {
    let boxes = document.getElementById("board").children;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.add("square");
        boxes[i].setAttribute("id", i);
        boxes[i].onclick = function(){
            clickTracker(boxes[i]);
        }

        boxes[i].onmouseover = function(){
            hoverTracker(boxes[i]);
        }

        boxes[i].onmouseout = function(){
            hoverTrackerRemoval(boxes[i]);
        }

    }
    let newGameButton = document.getElementsByClassName("btn");
//    for (let i = 0; i < newGameButton.length; i++){
//        console.log(newGameButton[i]);
//    }
    console.log(newGameButton[0]);
    newGameButton[0].onclick = function(){
        restartGame();
    }
    
}


let gameOver = false; 
let whichOne = 0; 
const winningSquares = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6] 
];

console.log(winningSquares.includes([0,1,2]));
let currentPlays = ["","","","","","","","",""]; 

let clickTracker = function(currentBox){
    if (gameOver){
        console.log("Game is over. Restart to continue!");
    }
    else if (currentBox.innerHTML == "X" || currentBox.innerHTML == "O"){
        console.log("Pick a different square!");
    }
    else
    {
        if (whichOne == 0){
            player = "X";
            whichOne = 1;
            currentBox.innerHTML = "X";
            currentBox.classList.add("X");
            currentPlays[currentBox.id] = "X";
        }
        else{
            player = "O";
            whichOne = 0;
            currentBox.innerHTML = "O";
            currentBox.classList.add("O");
            currentPlays[currentBox.id] = "O";

        }
        winChecker();
        console.log(`${player} clicked at square ${currentBox.id}.`);
        console.log(currentPlays);
    }
}

let hoverTracker = function(currentBox){
    currentBox.classList.add("hover");
}

let hoverTrackerRemoval = function(currentBox){
    currentBox.classList.remove("hover");
}

function winChecker () {
    for (let i = 0; i < 8; i++){
        let winCheck = winningSquares[i];
        let a = currentPlays[winCheck[0]];
        let b = currentPlays[winCheck[1]];
        let c = currentPlays[winCheck[2]];

        if (a == "" || b == "" || c==""){
            continue;
        }
        if (a == b && b ==c){
            gameOver = true;
            break;
        }
    }
    if (gameOver){
        let statusBox = document.getElementById("status");
        let winnerMsg = `Congratulations! ${player} is the Winner!`;
        statusBox.classList.add("you-won");
        statusBox.innerHTML = winnerMsg;
        console.log("Game Over Bro!!");
    }
}
function restartGame(){
    currentPlays = ["","","","","","","","",""];
    let boxes = document.getElementById("board").children;
    for (let i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = "";
        boxes[i].classList.remove("X");
        boxes[i].classList.remove("O");
    }
    let statusBox = document.getElementById("status");
    statusBox.classList.remove("you-won");
    statusBox.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    gameOver = false;
}

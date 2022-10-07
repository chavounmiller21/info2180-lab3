window.onload = function() {
    let boxes = document.getElementById("board").children;
    for (let x = 0; x < boxes.length; x++){
        boxes[x].classList.add("square");
        boxes[x].setAttribute("id", x);
        boxes[x].onclick = function(){
            clickTracker(boxes[x]);
        }

        boxes[x].onmouseover = function(){
            hoverTracker(boxes[x]);
        }

        boxes[x].onmouseout = function(){
            hoverTrackerRemoval(boxes[x]);
        }

    }

    let newGameButton = document.getElementsByClassName("button");
//    for (let x = 0; x < newGameButton.length; x++){
//        console.log(newGameButton[x]);
//    }
    console.log(newGameButton[0]);
    newGameButton[0].onclick = function(){
        restartGame();
    }
    
}

let gameOver = false; // this checks if game is finished
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
document.addEventListener("DOMContentLoaded", function() { mainfunction() });

function mainfunction() {

    let addsquare = document.getElementById("board").children;
    var player_one = 1;
    var player1arr = [];
    var player2arr = [];

    for (let i = 0; i < addsquare.length; i++) {
        addsquare[i].classList.add("square")
        addsquare[i].onclick = function() { myFunction() };
        addsquare[i].addEventListener('mouseover',
            function(e) { e.target.classList.add('hover') });

        addsquare[i].addEventListener('mouseout',
            function(e) { e.target.classList.remove('hover') });

            function myFunction() {




                if (player_one == 1) {
    
                    addsquare[i].innerHTML = "X";
                    addsquare[i].classList.add("X")
                    player_one = 0;
                    player1arr.push(i);
                    addsquare[i].onclick = false;
                    if (player1arr.includes(0) && player1arr.includes(1) && player1arr.includes(2) ||
                        player1arr.includes(3) && player1arr.includes(4) && player1arr.includes(5) ||
                        player1arr.includes(6) && player1arr.includes(7) && player1arr.includes(8)) {
                        document.getElementById("status").classList.add("you-won")
                        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!"
                    }
    
    
    
                } else {
    
                    addsquare[i].innerHTML = "O";
                    addsquare[i].classList.add("O")
                    player_one = 1;
                    player2arr.push(i);
                    addsquare[i].onclick = false;
                    if (player2arr.includes(0) && player2arr.includes(1) && player2arr.includes(2) ||
                    player2arr.includes(3) && player2arr.includes(4) && player2arr.includes(5) ||
                    player2arr.includes(6) && player2arr.includes(7) && player2arr.includes(8)) {
                    document.getElementById("status").classList.add("you-won")
                    document.getElementById("status").innerHTML = "Congratulations! O is the Winner!"
                }

            }
        }
        const restartGame = document.getElementsByClassName("btn")
        restartGame[0].addEventListener('click', function() {
            addsquare[i].innerHTML = ""
            mainfunction();

        });


    }

    console.log(player1arr)
    console.log(player2arr)
        /*if ((player1arr.includes("0") && player1arr.includes("1") && player1arr.includes("2")) ||
            (player1arr.includes("3") && player1arr.includes("4") && player1arr.includes("5")) ||
            (player1arr.includes("6") && player1arr.includes("7") && player1arr.includes("8"))) {
            alert("Player 1 is the winner");*/
}
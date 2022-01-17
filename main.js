
let gameActive = false;
let startButton = document.querySelector(".start-btn");
let boxes = document.querySelectorAll(".box");
let playingBoard = document.querySelector(".board");
let playerTurnDisplay = document.querySelector(".player-turn");
let victoryMessage = document.querySelector(".victory-msg");
let circle = '<i class="far fa-circle" value="circle" aria-hidden="true"></i>';
let cross = '<i class="fas fa-times" value="cross"></i>';
let winner;
let win = false;
let playerTurn;
let myWinChecker;


startButton.addEventListener("click", ()=>{
    victoryMessage.classList.add("hide");
    victoryMessage.innerText = "";
    myWinChecker = setInterval(checkWin, 100);
    gameActive = true;
    playerTurn = 1;
    startButton.classList.add("hide");
    playerTurnDisplay.classList.remove("hide");
    playingBoard.classList.remove("hide");
    playerTurnDisplay.innerText = `Player ${playerTurn}, it's your turn`;
    boxes.forEach((box)=>{
        if (gameActive == true){
            if (win == false){
                box.addEventListener("click", ()=>{
                    if (box.innerHTML == ""){ //checking to see if box is empty
                        if (playerTurn == 1){
                            box.innerHTML = circle;
                            playerTurn = 2;
                            playerTurnDisplay.innerText = `Player ${playerTurn}, it's your turn`;
                        } else {
                            box.innerHTML = cross;
                            playerTurn = 1;
                            playerTurnDisplay.innerText = `Player ${playerTurn}, it's your turn`;
                        }
                    }
                })
            }
        }
    })
})

function checkWin(){
    if ((boxes[0].innerHTML != "" && boxes[1].innerHTML != "" && boxes[2].innerHTML != "") && (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML)){
        if (boxes[0].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart();
    } else if ((boxes[0].innerHTML != "" && boxes[3].innerHTML != "" && boxes[6].innerHTML != "") && (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML)){
        if (boxes[0].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if ((boxes[0].innerHTML != "" && boxes[4].innerHTML != "" && boxes[8].innerHTML != "") && (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML)){
        if (boxes[0].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if ((boxes[1].innerHTML != "" && boxes[4].innerHTML != "" && boxes[7].innerHTML != "") && (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML)){
        if (boxes[1].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if ((boxes[2].innerHTML != "" && boxes[4].innerHTML != "" && boxes[6].innerHTML != "") && (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML)){
        if (boxes[2].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if ((boxes[2].innerHTML != "" && boxes[5].innerHTML != "" && boxes[8].innerHTML != "") && (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML)){
        if (boxes[2].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if ((boxes[3].innerHTML != "" && boxes[4].innerHTML != "" && boxes[5].innerHTML != "") && (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML)){
        if (boxes[3].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if ((boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") && (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML)){
        if (boxes[6].innerHTML == circle){
            winner = "Circles";
        } else {
            winner = "Crosses";
        }
        clearAndRestart()
    } else if (boxes[0].innerHTML != "" && boxes[1].innerHTML != "" && boxes[2].innerHTML != "" && boxes[3].innerHTML != "" && boxes[4].innerHTML != "" && boxes[5].innerHTML != "" && boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") {
        winner = "Nobody";
        clearAndRestart()
    }
}

function clearAndRestart(){
    clearInterval(myWinChecker);
    gameActive = false;
    boxes.forEach((box)=>{
        box.innerHTML = "";
    })
    gameActive = false;
    playerTurnDisplay.classList.add("hide");
    startButton.classList.remove("hide");
    playingBoard.classList.add("hide");
    victoryMessage.classList.remove("hide");
    victoryMessage.innerText = `${winner} won!`;
}
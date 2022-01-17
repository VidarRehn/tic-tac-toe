
let gameActive = false;
let startButton = document.querySelector(".start-btn");
let boxes = document.querySelectorAll(".box");
let playerTurnDisplay = document.querySelector(".player-turn");
let circle = '<i class="far fa-circle" value="circle"></i>';
let cross = '<i class="fas fa-times" value="cross"></i>';
let win = false;


startButton.addEventListener("click", ()=>{
    gameActive = true;
    let playerTurn = 1;
    startButton.classList.add("hide");
    playerTurnDisplay.classList.remove("hide");
    playerTurnDisplay.innerText = `Player ${playerTurn}, it's your turn`;
    boxes.forEach((box)=>{
        if (gameActive === true){
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
        console.log("yay");
        clearInterval(myWinChecker);
        gameActive = false;
    } else if ((boxes[0].innerHTML != "" && boxes[3].innerHTML != "" && boxes[6].innerHTML != "") && (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } else if ((boxes[0].innerHTML != "" && boxes[4].innerHTML != "" && boxes[8].innerHTML != "") && (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } else if ((boxes[1].innerHTML != "" && boxes[4].innerHTML != "" && boxes[7].innerHTML != "") && (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } else if ((boxes[2].innerHTML != "" && boxes[4].innerHTML != "" && boxes[6].innerHTML != "") && (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } else if ((boxes[2].innerHTML != "" && boxes[5].innerHTML != "" && boxes[8].innerHTML != "") && (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } else if ((boxes[3].innerHTML != "" && boxes[4].innerHTML != "" && boxes[5].innerHTML != "") && (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } else if ((boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") && (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML)){
        console.log("yay");
        clearInterval(myWinChecker);
    } 
}

const myWinChecker = setInterval(checkWin, 100);
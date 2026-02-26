const choices = ["ROCK", "PAPER", "SCISSORS"];  //array of choices

//declare const and select all images within class choice
const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const resultDisplay = document.getElementById("result");

const computerWait = document.getElementById("questionMark");
const choiceButtons = document.querySelectorAll(".choice");


//loop through and add click eventListener to buttons and start the game
for (let i = 0; i < choiceButtons.length; i++) {

    choiceButtons[i].addEventListener("click", function (e) {

        const img = this.querySelector("img");
        const playerTurn = img.alt;

        startGame(playerTurn);
    });

}

//function for starting the game
function startGame(playerTurn) {
    borderChoice(playerTurn);
    shuffleImg(playerTurn);
}

//function for changing the border for selected choice
function borderChoice(playerTurn) {
    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].style.border = "5px solid black";
    }

    for (let i = 0; i < choiceButtons.length; i++) {
        const img = choiceButtons[i].querySelector("img");

        if (img.alt === playerTurn) {
            choiceButtons[i].style.border = "5px solid rgb(241, 120, 205)";
        }
    }
    playerDisplay.textContent = "PLAYER: " + playerTurn;
}

//function for having the computer shuffle and waiting

function shuffleImg(playerTurn) {
    let shuffleInterval = setInterval(function () {
        const randomChoice = Math.floor(Math.random() * 3);
        computerWait.src = "images/" + choices[randomChoice] + ".PNG";
    }, 500);
    setTimeout(function () {
        clearInterval(shuffleInterval);

        const computerTurn = choices[Math.floor(Math.random() * 3)];
        computerWait.src = "images/" + computerTurn + ".PNG";

        computerDisplay.textContent = "COMPUTER: " + computerTurn;

        decideWinner(playerTurn, computerTurn);
    }, 3000);
}
//function to decide who won the game and display result

function decideWinner(playerTurn, computerTurn) {
    let resultText = "";

    if (playerTurn === computerTurn) {
        resultText = "It's a tie!"
    }
    else if (
        (playerTurn === "ROCK" && computerTurn === "SCISSORS") ||
        (playerTurn === "PAPER" && computerTurn === "ROCK") ||
        (playerTurn === "SCISSORS" && computerTurn === "PAPER")
    ) {
        resultText = "You win!"
    }
    else {
        resultText = "Computer wins!"
    }
    resultDisplay.textContent = resultText;
}



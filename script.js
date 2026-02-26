const choices = ["ROCK", "PAPER", "SCISSORS"];

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        e.preventDefault(); 

        const img = this.querySelector("img");

        const playerTurn = img.alt.toUpperCase();

        playGame(playerTurn);
    });
});

function playGame(playerTurn) {
    const computerTurn = choices[Math.floor(Math.random() * 3)];
    let resultDisplay = "";

    if (playerTurn === computerTurn) {
        resultDisplay = "It's a tie!";
    }
    else if(
        (playerTurn === "ROCK" && computerTurn === "SCISSORS") ||
        (playerTurn === "PAPER" && computerTurn === "ROCK") ||
        (playerTurn === "SCISSORS" && computerTurn === "PAPER")
    ){
        resultDisplay = "You win!";
    }
    else {
        resultDisplay = "Computer wins!";
    }

    playerChoice.textContent = "Player: " + playerTurn;
    computerChoice.textContent = "Computer: " + computerTurn;
    result.textContent = resultDisplay;
}
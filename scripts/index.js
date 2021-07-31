const choices = document.querySelectorAll(".choice");
const resultBox = document.querySelector("#result-box");
const startButton = document.querySelector("#start");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const TotalScoreDisplay = document.querySelector("#total-score");
let playerScore = 0,computerScore = 0;
let totalScore = 0;

startButton.onclick = playGame;

function playComputer() {
    let rand = Math.floor(Math.random()*3)+1;
    if (rand == 1) 
        return "rock";
    else if (rand == 2)
        return "paper";
    else
        return "scissors";
}

function playRound(player,computer) {
    player = player.toLowerCase();
    if (player == "rock") {
        if (computer  == "scissors")
            return "player";
        else if (computer == "paper")
            return "computer";
        else
            return "draw";
    }
    else if (player == "paper") {
        if (computer == "rock")
            return "player";
        else if (computer == "scissors")
            return "computer";
        else 
            return "draw";
    }
    else if (player == "scissors") {
        if (computer == "paper")
            return "player";
        else if (computer == "rock")
            return  "computer";
        else
            return "draw";
    }
}

function playGame() {
    playerScore = 0,computerScore = 0,totalScore = 0;
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "CPU Score: 0";
    TotalScoreDisplay.textContent = "Total Score: 0";
    startButton.style.backgroundColor = "red";
    startButton.textContent = "Restart?"
    choices.forEach((choice) => {
        choice.addEventListener('click',countGame);
    });
}

function countGame(e) {
    console.log("count game");
    let result = playRound(e.target.id,playComputer())
    if (result == "player") {
        playerScore += 1;
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        totalScore += 1;
        resultBox.textContent = "Player wins!";
    } 
    else if (result == "computer") {
        computerScore += 1;
        computerScoreDisplay.textContent = `CPU Score: ${computerScore}`;
        totalScore += 1;
        resultBox.textContent = "CPU wins!";
    }
    else {
        resultBox.textContent = "It's a DRAW!";
    }
    TotalScoreDisplay.textContent = `Total Score: ${totalScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    startButton.style.backgroundColor = "green";
    startButton.textContent = "Start Again?"
    choices.forEach((choice) => {
        choice.removeEventListener('click',countGame);
    });
}
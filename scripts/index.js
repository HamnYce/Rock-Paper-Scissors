const choices = document.querySelectorAll(".choice");
const resultBox = document.querySelector("#result-box");
let playerScore = 0,computerScore = 0;
let totalScore = 0;

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


const startButton = document.querySelector("#start");
startButton.onclick = playGame;

function playGame() {
    choices.forEach((choice) => {
        choice.addEventListener('click',countGame);
    });
}


function countGame(e) {
    let result = playRound(e.target.id,playComputer())
    if (result == "player") {
        playerScore += 1;
        totalScore += 1;
    } 
    else if (result == "computer") {
        computerScore += 1;
        totalScore += 1;
    }
    resultBox.textContent = result;

    if (totalScore >= 5) {
        endGame()
    }
}

function endGame() {
    console.log("end")
    console.log(`player score: ${playerScore}`)
    console.log(`computer score: ${computerScore}`)
    choices.forEach((choice) => {
        choice.removeEventListener('click',countGame);
    });
}
//show playerscore and computerscore incrementing with each game.
//add end game message, and the winner/draw message in resultBox
//add message when game stats
//(could set time out for resultBox messages - with fade-in/out)
//at the end css it 
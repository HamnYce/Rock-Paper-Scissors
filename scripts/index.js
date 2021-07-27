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
            return "Player wins, rock beats scissors!";
        else if (computer == "paper")
            return "Computer wins, paper beats rock!";
        else
            return "It's a DRAW!";
    }
    else if (player == "paper") {
        if (computer == "rock")
            return "Player wins, paper beats rock!";
        else if (computer == "scissors")
            return "Computer wins, scissors beats paper!";
        else 
            return "It's a DRAW!"
    }
    else if (player == "scissors") {
        if (computer == "paper")
            return "Player wins, scissors beats paper!";
        else if (computer == "rock")
            return  "Computer wins, rock beats scissors!";
        else
            return "It's a DRAW!";
    }
}   

function game() {
    let userInput;
    let computerInput;
    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i}!`)
        userInput = prompt("rock, paper or scissors! (with the s)")
        computerInput = playComputer();
        console.error(`The CPU has gone ${computerInput}!`)
        console.warn(playRound(userInput,computerInput));
    }
}
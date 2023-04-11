function getComputerChoice() {
    //generate a random integer from 0 to 2
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) {
        return "rock"
    } else if (guess == 1) {
        return "paper"
    } else if (guess == 2) {
        return "scissors"
    }
}

function playRound (playerChoice, computerChoice) {
    //rock>scissors, paper>rock, scissors>paper
    if (playerChoice == computerChoice) {
        return 0 // Tie
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Victory! Scissors beat paper.")
            return 1 // Win
        } else {
            console.log("Defeat. Rock beat scissors.")
            return 2 // Loss
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Victory! Paper beat rock.")
            return 1
        } else {
            console.log("Defeat. Scissors beat paper.")
            return 2
        }
    } else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("Victory! Rock beat scissors.")
            return 1
        } else {
            console.log("Defeat. Paper beat rock.")
            return 2
        }
    }
}

function game() {
    let playerWins = 0
    let ComputerWins = 0
    let computerChoice = ""
    let playerChoice = ""
    let result = 0
    for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt('Your choice: ').toLowerCase();
        result = playRound(playerChoice, computerChoice);
        if (result == 1) {
            playerWins++
        } else if (result == 2) {
            ComputerWins++
        } else {
            console.log("Tie.")
        }
    }
    if (playerWins > ComputerWins) {
        console.log(`Player Wins ${playerWins} to ${ComputerWins}!`)
    } else if (playerWins < ComputerWins) {
        console.log(`Computer Wins ${ComputerWins} to ${playerWins}!`)
    } else {
        console.log(`Game tied ${playerWins} to ${ComputerWins}.`)
    }
}

const button = document.querySelector("button");
button.addEventListener("click", game)

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
        return "tie"
    } else if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        return "victory!"
    } else {
        return "defeated."
    }
}

const computerChoice = getComputerChoice();
const playerChoice = prompt('Your choice: ').toLowerCase();
console.log(`Your choice was ${playerChoice}. The computer's choice was ${computerChoice}.`)
console.log(playRound(playerChoice, computerChoice));
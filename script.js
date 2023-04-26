let playerWins = 0
let computerWins = 0

let computerChoice = ""
let playerChoice = ""

let currentRound = 1

const scissorsbtn = document.getElementById('scissorsbtn');
scissorsbtn.addEventListener('click', function() {
    playerChoice = 0
    computerChoice = getComputerChoice()
    playRound(playerChoice, computerChoice)
});
const paperbtn = document.getElementById('paperbtn');
paperbtn.addEventListener('click', function() {
    playerChoice = 1
    computerChoice = getComputerChoice()
    playRound(playerChoice, computerChoice)
});
const rockbtn = document.getElementById('rockbtn');
rockbtn.addEventListener('click', function() {
    playerChoice = 2
    computerChoice = getComputerChoice()
    playRound(playerChoice, computerChoice)
});

const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const infoText = document.getElementById('infoText');
const roundText = document.getElementById('roundText');

function incrementRound() {
    currentRound++
    if (currentRound > 5) {
        if (playerWins > computerWins) {
            infoText.textContent = "You win the game!"
            document.getElementById("scissorsbtn").disabled = true;
            document.getElementById("paperbtn").disabled = true;
            document.getElementById("rockbtn").disabled = true;
        }
        else if (playerWins < computerWins) {
            infoText.textContent = "You lose the game!"
            document.getElementById("scissorsbtn").disabled = true;
            document.getElementById("paperbtn").disabled = true;
            document.getElementById("rockbtn").disabled = true;
        }
    } else { roundText.textContent = "Round " + currentRound + " of 5" }
}

function incrementScore(winner) {
    if (winner == "player") {
        playerWins++
        playerScore.textContent = playerWins
    } else if (winner == "cpu") {
        computerWins++
        computerScore.textContent = computerWins
    }
    incrementRound()
}

function getComputerChoice() {
    // Generate a random integer from 0 to 2
    // scissors = 0, paper = 1, rock = 2
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) {
        return 0
    } else if (guess == 1) {
        return 1
    } else if (guess == 2) {
        return 2
    }
}

function playRound (playerChoice, computerChoice) {
    // scissors > paper > rock > scissors
    // scissors = 0, paper = 1, rock = 2
    if (playerChoice ==  computerChoice) {
        infoText.textContent = "It's a tie!"
    } else if (playerChoice == 0 && computerChoice == 1) {
        infoText.textContent = "You win! Scissors beats paper."
        incrementScore("player")
    } else if (playerChoice == 0 && computerChoice == 2) {
        infoText.textContent = "You lose! Rock beats scissors."
        incrementScore("cpu")
    } else if (playerChoice == 1 && computerChoice == 0) {
        infoText.textContent = "You lose! Scissors beats paper."
        incrementScore("cpu")
    } else if (playerChoice == 1 && computerChoice == 2) {
        infoText.textContent = "You win! Paper beats rock."
        incrementScore("player")
    } else if (playerChoice == 2 && computerChoice == 0) {
        infoText.textContent = "You win! Rock beats scissors."
        incrementScore("player")
    } else if (playerChoice == 2 && computerChoice == 1) {
        infoText.textContent = "You lose! Paper beats rock."
        incrementScore("cpu")
    }
}

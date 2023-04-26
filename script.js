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
const scoreCont = document.querySelector('scoreCont');
const winnerText = document.getElementById('winnerText');
const resetbtn = document.getElementById('resetbtn');

function endGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        winnerText.textContent = `You won the game ${playerScore} to ${computerScore}!`
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("paperbtn").disabled = true;
        document.getElementById("rockbtn").disabled = true;
        document.getElementById("resetbtn").disabled = false;
    }
    else if (playerScore < computerScore) {
        winnerText.textContent = `You lost the game ${playerScore} to ${computerScore}!`
        document.getElementById("scissorsbtn").disabled = true;
        document.getElementById("paperbtn").disabled = true;
        document.getElementById("rockbtn").disabled = true;
        document.getElementById("resetbtn").disabled = false;
    }
}

function incrementScore(winner) {
    if (winner == "player") {
        playerWins++
        playerScore.textContent = playerWins
    } else if (winner == "cpu") {
        computerWins++
        computerScore.textContent = computerWins
    }

    if (playerWins > 2 || computerWins > 2) {
        endGame(playerWins, computerWins)
    } else {
        currentRound++
        roundText.textContent = "Round " + currentRound + " of 5"
    }
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

function resetGame() {
    playerWins = 0
    computerWins = 0
    currentRound = 1
    playerScore.textContent = playerWins
    computerScore.textContent = computerWins
    infoText.textContent = "Choose your weapon!"
    roundText.textContent = "Round " + currentRound + " of 5"
    winnerText.textContent = ""
    document.getElementById("scissorsbtn").disabled = false;
    document.getElementById("paperbtn").disabled = false;
    document.getElementById("rockbtn").disabled = false;
    document.getElementById("resetbtn").disabled = true;
}

// resets game
resetbtn.addEventListener('click', function() {
    resetGame()
});

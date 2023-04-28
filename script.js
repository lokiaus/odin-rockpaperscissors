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

const roundsBar = document.getElementById('roundsBar');
function addRoundChild(outcome) {
    let round = document.createElement("div");
    round.classList.add("round");
    round.classList.add(outcome);
    roundsBar.appendChild(round);
}

const plrWinsText = document.getElementById('plrWinsText');
const cpuWinsText = document.getElementById('cpuWinsText');

// stores plrVictories and cpuVictories in local storage
function storeScore() {
    localStorage.setItem("plrVictories", plrVictories);
    localStorage.setItem("cpuVictories", cpuVictories);
}

// retrieves plrVictories and cpuVictories from local storage
function getScore() {
    plrVictories = localStorage.getItem("plrVictories");
    cpuVictories = localStorage.getItem("cpuVictories");
    plrWinsText.textContent = "Player Wins: " + plrVictories;
    cpuWinsText.textContent = "Computer Wins: " + cpuVictories;
}

// resets plsVictories and cpuVictories in local storage
function resetScore() {
    localStorage.setItem("plrVictories", 0);
    localStorage.setItem("cpuVictories", 0);
    plrVictories = 0;
    cpuVictories = 0;
    plrWinsText.textContent = "Player Wins: " + plrVictories;
    cpuWinsText.textContent = "Computer Wins: " + cpuVictories;
}

if (localStorage.getItem("plrVictories") !== null || localStorage.getItem("cpuVictories") !== null) {
    getScore();
} else {
    resetScore();
}

if (localStorage.getItem("cpuVictories") === null) {
    resetScore();
} else {
    getScore();
}

// when rstHistory button is pressed, prompt the user to confirm, then call resetScore()
const rstHistory = document.getElementById('rstHistory');
rstHistory.addEventListener('click', function() {
    if (confirm("Are you sure you want to reset your history?")) {
        resetScore();
    }
});


function endGame(playerScore, computerScore) {
    if (playerScore > computerScore) {
        winnerText.textContent = `You won the game ${playerScore} to ${computerScore}!`
        scissorsbtn.style.scale = 0;
        paperbtn.style.scale = 0;
        rockbtn.style.scale = 0;
        resetbtn.style.scale = 1;
        document.getElementById("playerScoreCont").style.borderColor = "lightgreen";
        plrVictories++;
        storeScore();
        plrWinsText.textContent = "Player Wins: " + plrVictories;
    }
    else if (playerScore < computerScore) {
        winnerText.textContent = `You lost the game ${playerScore} to ${computerScore}!`
        scissorsbtn.style.scale = 0;
        paperbtn.style.scale = 0;
        rockbtn.style.scale = 0;
        resetbtn.style.scale = 1;
        document.getElementById("cpuScoreCont").style.borderColor = "lightgreen";
        cpuVictories++;
        storeScore();
        cpuWinsText.textContent = "Computer Wins: " + cpuVictories;

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
        updateInfoText("tie")
        addRoundChild("gameIsTied")
    } else if (playerChoice == 0 && computerChoice == 1) {
        infoText.textContent = "You win! Scissors beats paper."
        updateInfoText("player")
        addRoundChild("playerIsWinner")
        incrementScore("player")
    } else if (playerChoice == 0 && computerChoice == 2) {
        infoText.textContent = "You lose! Rock beats scissors."
        updateInfoText("cpu")
        addRoundChild("cpuIsWinner")
        incrementScore("cpu")
    } else if (playerChoice == 1 && computerChoice == 0) {
        infoText.textContent = "You lose! Scissors beats paper."
        updateInfoText("cpu")
        addRoundChild("cpuIsWinner")
        incrementScore("cpu")
    } else if (playerChoice == 1 && computerChoice == 2) {
        infoText.textContent = "You win! Paper beats rock."
        updateInfoText("player")
        addRoundChild("playerIsWinner")
        incrementScore("player")
    } else if (playerChoice == 2 && computerChoice == 0) {
        infoText.textContent = "You win! Rock beats scissors."
        updateInfoText("player")
        addRoundChild("playerIsWinner")
        incrementScore("player")
    } else if (playerChoice == 2 && computerChoice == 1) {
        infoText.textContent = "You lose! Paper beats rock."
        updateInfoText("cpu")
        addRoundChild("cpuIsWinner")
        incrementScore("cpu")
    }
}

function updateInfoText(outcome) {
    if (outcome == "player") {
        infoText.style.color = "lightgreen"
        infoText.style.borderColor = "green"
    } else if (outcome == "cpu") {
        infoText.style.color = "pink"
        infoText.style.borderColor = "red"
    } else if (outcome == "tie") {
        infoText.style.color = "white"
        infoText.style.borderColor = "lightgray"
    }
}

function resetGame() {
    playerWins = 0
    computerWins = 0
    currentRound = 1
    playerScore.textContent = playerWins
    computerScore.textContent = computerWins
    infoText.style.color = "white"
    infoText.style.borderColor = "lightgray"
    infoText.textContent = "Choose your weapon!"
    roundsBar.innerHTML = ""
    roundText.textContent = "Round " + currentRound + " of 5"
    winnerText.textContent = ""
    scissorsbtn.style.scale = 1;
    paperbtn.style.scale = 1;
    rockbtn.style.scale = 1;
    resetbtn.style.scale = 0;
    document.getElementById("playerScoreCont").style.borderColor = "rgb(102, 102, 102)";
    document.getElementById("cpuScoreCont").style.borderColor = "rgb(102, 102, 102)";
}

// resets game
resetbtn.addEventListener('click', function() {
    resetGame()
});

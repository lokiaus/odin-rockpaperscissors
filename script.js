function getComputerChoice() {
    //generate a random integer from 0 to 2
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) {
        return "Rock"
    } else if (guess == 1) {
        return "Paper"
    } else if (guess == 2) {
        return "Scissors"
    }
}

let computerChoice = getComputerChoice()
console.log(computerChoice)
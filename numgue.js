let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {

    return Math.floor(Math.random() * Math.floor(10));
}

function compareGuesses(humanGuessInput, target, computerGuess) {
    if (Math.abs(humanGuessInput - target) <=  Math.abs(computerGuess - target)) {
        return true;
    } if  (Math.abs(humanGuessInput - target) >=  Math.abs(computerGuess - target)){
        return false;
    }
}

function updateScore(winner) {
    if (winner == 'human') {
        return humanScore++
    } if (winner == "computer") {
        return  computerScore++
    } else {

    }
}

function advanceRound() {
    return currentRoundNumber++
}
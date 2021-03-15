// Rock, Paper, Scissors assignment from The Odin Project

// Computer will randomly select one of the three moves
// Player will input their chosen move
// Script will determine winner or a tie and notify the player
// Asks the player to play five rounds and keeps score, declaring the winner at the end


function computerPlay() {
    computerSelection = plays[Math.floor(Math.random() * plays.length)];
}


function showScore(playerScore, computerScore) {
    alert(`The score is now:

        Player: ${playerScore}
        Computer: ${computerScore}
        Round #: ${roundsPlayed}`);
}

function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert(`Congratulations, you won!
        
        The final score was:
        
        Player: ${playerScore}
        Computer: ${computerScore}`);
    } else {
        alert(`Sorry, you lost!
        
        The final score was:
        
        Player: ${playerScore}
        Computer: ${computerScore}`);
    }
}

const plays = ["rock", "paper", "scissors"];

let computerSelection;

let computerScore = 0;
let playerScore = 0;

let roundsPlayed = 0;


function game() {
    while (roundsPlayed <= 5) {
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "rock" && computerSelection === "paper") {
                computerScore += 1;
                alert(`You lost! Paper beats Rock.`);
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                computerScore += 1;
                alert(`You lost! Scissors beats Paper.`);
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                computerScore += 1;
                alert(`You lost! Rock beats Scissors.`);
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                playerScore += 1;
                alert(`You won! Rock beats Scissors.`);
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                playerScore += 1;
                alert(`You won! Paper beats Rock.`);
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                playerScore += 1;
                alert(`You won! Scissors beats Paper.`);
            } else {
                alert("It's a tie! Let's play again...");
                roundsPlayed -= 1;
            }
        }

        let playerSelection = prompt(`Choose your weapon!: 
                        Rock
                        Paper
                        Scissors
                        
                        (Enter an item above)`);

        playerSelection = playerSelection.toLowerCase();

        computerPlay();

        roundsPlayed += 1;
        playRound(playerSelection, computerSelection);
        showScore(playerScore, computerScore);
    }

    declareWinner(playerScore, computerScore);
}

game();
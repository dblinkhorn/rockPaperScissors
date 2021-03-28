// Rock, Paper, Scissors assignment from The Odin Project

// Computer will randomly select one of the three moves
// Player will input their chosen move
// Script will determine winner or a tie and notify the player
// Asks the player to play five rounds and keeps score, declaring the winner at the end


// function to display the score to avoid repeating code in game() logic
function showScore(playerScore, computerScore) {
    alert(`The score is now:

        Player: ${playerScore}
        Computer: ${computerScore}
        Round #: ${roundsPlayed}`);
}


// function which declares win or loss condition
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

// sets scores to 0 to start, keeps track of score which changes each round in game() function
let computerScore = 0;
let playerScore = 0;


function playRound(playerSelection) {
    // function to select computer's play
    function computerPlay() {
    const plays = ["rock", "paper", "scissors"];
    computerSelection = plays[Math.floor(Math.random() * 3)];
    return computerSelection;
    }

    computerSelection = computerPlay();

    console.log(playerSelection);

    console.log(computerSelection);

    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        document.getElementById("status").innerHTML = "<p>You lost! Paper beats rock!</p>"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        document.getElementById("status").innerHTML = "<p>You lost! Scissors beats paper!</p>"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        document.getElementById("status").innerHTML = "<p>You lost! Rock beats scissors!</p>"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        document.getElementById("status").innerHTML = "<p>You won! Rock beats scissors!</p>"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        document.getElementById("status").innerHTML = "<p>You won! Paper beats rock!</p>"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        document.getElementById("status").innerHTML = "<p>You won! Scissors beats paper!</p>"
    } else {
        document.getElementById("status").innerHTML = "<p>It's a tie! Let's play again.</p>"
    }
}

let playerSelection;

let rock = document.getElementById("rock");
rock.addEventListener("click", function () {
    playerSelection = "rock";
    playRound(playerSelection);
});

let paper = document.getElementById("paper");
paper.addEventListener("click", function () {
    playerSelection = "paper";
    playRound(playerSelection);
});

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function () {
    playerSelection = "scissors";
    playRound(playerSelection);
});
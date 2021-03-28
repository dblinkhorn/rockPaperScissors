// Rock, Paper, Scissors assignment from The Odin Project

// Computer will randomly select one of the three moves
// Player will input their chosen move
// Script will determine winner or a tie and notify the player
// Asks the player to play five rounds and keeps score, declaring the winner at the end

// sets scores to 0 to start, keeps track of score which changes each round in playRound function
let computerScore = 0;
let playerScore = 0;

// function that determines outcome of the round
function playRound(playerSelection) {
    // function to select computer's play
    function computerPlay() {
    // variable stores possible plays
    const plays = ["rock", "paper", "scissors"];
    // variable stores randomly selected item from plays above
    computerSelection = plays[Math.floor(Math.random() * 3)];
    return computerSelection;
    }

    // set the variable to the returned play value
    computerSelection = computerPlay();

    // main game logic, determines winner of round based on selections
    if (playerSelection === "rock" && computerSelection === "paper") {
        // award point to score
        computerScore += 1;
        // update status div with result of the round
        document.getElementById("status").innerHTML = "<p>The computer chose paper.</p><p><br>You lost... Paper beats rock.</p>";
        // update scores
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        document.getElementById("status").innerHTML = "<p>The computer chose scissors.</p><p><br>You lost... Scissors beats paper.</p>";
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        document.getElementById("status").innerHTML = "<p>The computer chose rock.</p><p><br>You lost... Rock beats scissors.</p>";
        document.getElementById("computer-score").innerHTML = `<br>${computerScore}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        document.getElementById("status").innerHTML = "<p>The computer chose scissors.</p><p><br>You won! Rock beats scissors.</p>";
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        document.getElementById("status").innerHTML = "<p>The computer chose rock.</p><p><br>You won! Paper beats rock.</p>";
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        document.getElementById("status").innerHTML = "<p>The computer chose paper.</p><p><br>You won! Scissors beats paper.</p>";
        document.getElementById("player-score").innerHTML = `<br>${playerScore}`;
    } else {
        // let player know if it's a tie. score doesn't change
        document.getElementById("status").innerHTML = `<p>The computer chose ${computerSelection}.</p><p><br>It's a tie! Let's play again.</p>`;
    }

    
}

// define variable to store player's selection
let playerSelection;

// sets variable to the html element with id="rock"
let rock = document.getElementById("rock");
// if rock is clicked
rock.addEventListener("click", function () {
    // set variable to rock
    playerSelection = "rock";
    // run function with "rock" as player's selection
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
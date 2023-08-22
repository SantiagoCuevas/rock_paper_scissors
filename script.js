"use strict";

// Rock, Paper, Scissors
console.log("Let's play Rock, Paper, Scissors!");

// Get computers choice
// const playerSelection = prompt("rock, paper, or scissors");
const playerSelection = "pApEr";
console.log("You chose:", playerSelection.toUpperCase());

// Get the computers choice
function getComputerChoice() {
  // Make computer choose number 1-3
  const randomNumber = Math.trunc(Math.random() * 3) + 1;

  // Turn number into rock, paper or scissors
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const computerSelection = getComputerChoice();
console.log("Computer chose:", computerSelection.toUpperCase(0));

// Compare the two and determine who wins
function playRound(playerSelection, computerSelection) {
  const playerInput = playerSelection.toLowerCase();

  if (
    (playerInput === "rock" && computerSelection === "scissors") ||
    (playerInput === "paper" && computerSelection === "rock") ||
    (playerInput === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerInput.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
  } else if (playerInput === computerSelection) {
    return `Tie! You both picked ${playerInput.toUpperCase()}`;
  } else {
    return `You lose! ${computerSelection.toUpperCase()} beats ${playerInput.toUpperCase()}.`;
  }
}
console.log(playRound(playerSelection, computerSelection));

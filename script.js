// Rock, Paper, Scissors

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;

const title = document.getElementById("title");
const beginGameBtn = document.getElementById("beginGame");
const rockBtn = document.getElementById(ROCK);
const paperBtn = document.getElementById(PAPER);
const scissorsBtn = document.getElementById(SCISSORS);
const scoreTracker = document.getElementById("score");
const playAgainBtn = document.getElementById("playAgain");

// Set Up Game Function
function gameSetUp() {
  playerScore = 0;
  computerScore = 0;

  title.innerHTML = "CHOOSE WISELY...";
  beginGameBtn.classList.add("hidden");
  rockBtn.classList.remove("hidden");
  paperBtn.classList.remove("hidden");
  scissorsBtn.classList.remove("hidden");
  scoreTracker.classList.remove("hidden");
  scoreTracker.textContent = `You: ${playerScore} 
    Computer: ${computerScore}`;
  playAgainBtn.classList.add("hidden");
}

// Begin Game and Play Again Event Listener
beginGameBtn.addEventListener("click", gameSetUp);

playAgainBtn.addEventListener("click", gameSetUp);

// Button Event Listeners (User's Input)
rockBtn.addEventListener("click", () => playRound(ROCK, getComputerChoice()));

paperBtn.addEventListener("click", () => playRound(PAPER, getComputerChoice()));

scissorsBtn.addEventListener("click", () =>
  playRound(SCISSORS, getComputerChoice())
);

// Get the computers choice
function getComputerChoice() {
  const randomNumber = Math.trunc(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return ROCK;
  } else if (randomNumber === 2) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

// Play Round
function playRound(playerInput, computerSelection) {
  if (
    (playerInput === ROCK && computerSelection === SCISSORS) ||
    (playerInput === PAPER && computerSelection === ROCK) ||
    (playerInput === SCISSORS && computerSelection === PAPER)
  ) {
    title.innerHTML = `${playerInput.toUpperCase()} BEATS ${computerSelection.toUpperCase()}. YOU WIN!`;

    playerScore++;

    scoreTracker.innerHTML = `You: ${playerScore} Computer: ${computerScore}`;
  } else if (playerInput === computerSelection) {
    title.innerHTML = `YOU BOTH CHOSE: ${playerInput.toUpperCase()}. TIE!`;
  } else {
    title.innerHTML = `${computerSelection.toUpperCase()} BEATS ${playerInput.toUpperCase()}. YOU LOSE!`;

    computerScore++;

    scoreTracker.innerHTML = `You: ${playerScore} Computer: ${computerScore}`;
  }

  if (playerScore === 5) {
    title.innerHTML = "GAME OVER! PLAYER WINS!";
    rockBtn.classList.add("hidden");
    paperBtn.classList.add("hidden");
    scissorsBtn.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  } else if (computerScore === 5) {
    title.innerHTML = "GAME OVER! COMPUTER WINS!";
    rockBtn.classList.add("hidden");
    paperBtn.classList.add("hidden");
    scissorsBtn.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  }
}

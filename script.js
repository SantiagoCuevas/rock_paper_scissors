// Rock, Paper, Scissors

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER = "player";
const COMPUTER = "computer";
const TIE = "tie";

function startIntroduction() {
  alert("Let's play Rock, Paper, Scissors!");
}

function getPlayerChoice() {
  let input = "";
  while (![ROCK, PAPER, SCISSORS].includes(input)) {
    input = prompt(
      "Please choose between Rock, Paper or Scissors."
    )?.toLowerCase();
  }
  return input;
}

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

// Compare the two and determine who wins
function playRound(playerSelection, computerSelection) {
  const playerInput = playerSelection.toLowerCase();

  if (
    (playerInput === "rock" && computerSelection === "scissors") ||
    (playerInput === "paper" && computerSelection === "rock") ||
    (playerInput === "scissors" && computerSelection === "paper")
  ) {
    return PLAYER;
    // return `You win! ${playerInput.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
  } else if (playerInput === computerSelection) {
    return TIE;
    // return `Tie! You both picked ${playerInput.toUpperCase()}`;
  } else {
    return COMPUTER;
    // return `You lose! ${computerSelection.toUpperCase()} beats ${playerInput.toUpperCase()}.`;
  }
}

function startConclusion() {
  alert("Thanks for playing!");
}

function playGame(roundCount) {
  startIntroduction();

  let round = 0;
  let playerScore = 0;
  let computerScore = 0;

  while (round < roundCount) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = playRound(playerChoice, computerChoice);

    if (winner === "player") {
      playerScore++;
      alert(
        `You chose: ${playerChoice.toUpperCase()}. The computer chose: ${computerChoice.toUpperCase()}. You WIN! Player: ${playerScore} Computer: ${computerScore}.`
      );
    } else if (winner === "computer") {
      computerScore++;
      alert(
        `You chose: ${playerChoice.toUpperCase()}. The computer chose: ${computerChoice.toUpperCase()}. You LOSE! Player: ${playerScore} Computer: ${computerScore}.`
      );
    } else {
      alert(
        `You chose: ${playerChoice.toUpperCase()}. The computer chose: ${computerChoice.toUpperCase()}. TIE! Player: ${playerScore} Computer: ${computerScore}.`
      );
    }

    round++;
  }

  startConclusion();
}

playGame(5);

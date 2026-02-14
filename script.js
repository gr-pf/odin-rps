const rpsChoices = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return rpsChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let userChoice = prompt("Choose between rock, paper and scissors");
  return userChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie !");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You Win this round!");
  } else {
    computerScore++;
    console.log("You Lose this round!");
  }
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  if (humanScore === computerScore) {
    console.log("Game ends on a tie...");
  } else if (humanScore > computerScore) {
    console.log("Yeah! You win the game!");
  } else {
    console.log("No... You lose the game :(");
  }
}

playGame();

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
    console.log("You Win !");
  } else {
    computerScore++;
    console.log("You Lose !");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

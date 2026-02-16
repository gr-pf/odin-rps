const rpsChoices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
  return rpsChoices[Math.floor(Math.random() * 3)];
}

function evaluateRound(choice1, choice2) {
  if (!(rpsChoices.includes(choice1) && rpsChoices.includes(choice1))) {
    return "Invalid choice";
  } else {
    const index1 = rpsChoices.indexOf(choice1);
    const index2 = rpsChoices.indexOf(choice2);

    switch (index1 - index2) {
      case -1:
      case 2:
        return "Lose";

      case 0:
        return "Tie";

      case 1:
      case -2:
        return "Win";
    }
  }
}

function playRound(event) {
  const humanChoice = event.target.innerText.toLowerCase();
  const computerChoice = getComputerChoice();

  const resultRound = evaluateRound(humanChoice, computerChoice);

  switch (resultRound) {
    case "Win":
      humanScore++;
      document.querySelector("#player-score p").innerText = humanScore;
      break;

    case "Lose":
      computerScore++;
      document.querySelector("#computer-score p").innerText = computerScore;
      break;
  }
  roundCounter++;
  document.querySelector("#rounds p").innerText = roundCounter;
}

const buttons = document.querySelectorAll("button");
const rockButton = document.querySelector("#rock");

buttons.forEach(() => addEventListener("click", playRound));

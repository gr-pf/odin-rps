const rpsChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return rpsChoices[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());

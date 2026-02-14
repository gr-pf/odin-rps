const rpsChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return rpsChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let userChoice = prompt("Choose between rock, paper and scissors");
  return userChoice;
}
getHumanChoice();

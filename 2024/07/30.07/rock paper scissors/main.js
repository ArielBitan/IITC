let playerScore = 0;
let computerScore = 0;

function tie(choice) {
  playerScore++;
  computerScore++;
  alert(`Both you and the computer picked ${choice}`);
  displayScore();
}
function playerWon(playerPick, computerPick) {
  playerScore++;
  alert(
    `You won! You picked ${playerPick} and the computer picked ${computerPick}`
  );
  displayScore();
}
function computerWon(playerPick, computerPick) {
  computerScore++;
  alert(
    `You lost! You picked ${playerPick} and the computer picked ${computerPick}`
  );
  displayScore();
}
function displayScore() {
  alert(
    `Your score is ${playerScore} and the computer's score is ${computerScore}`
  );
}
function randomChoice() {
  const picks = ["rock", "paper", "scissors"];
  const randomElement = picks[Math.floor(Math.random() * picks.length)];
  return randomElement;
}

function mainGame(playerPick) {
  const computerPick = randomChoice();
  console.log(computerPick);
  if (playerPick === computerPick) {
    tie(computerPick);
  } else if (
    (playerPick === "paper" && computerPick === "rock") ||
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "scissors" && computerPick === "paper")
  ) {
    playerWon(playerPick, computerPick);
  } else {
    computerWon(playerPick, computerPick);
  }
}
function pickRock() {
  mainGame("rock");
}
function pickPaper() {
  mainGame("paper");
}
function pickScissors() {
  mainGame("scissors");
}

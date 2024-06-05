const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WINS";
const RESULT_COMPUTER_WIN = "COMPUTER_WINS";
let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} OR ${SCISSORS}`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid Choice! We Choose ${DEFAULT_USER_CHOICE} For You!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue > 0.34 && randomValue < 0.67) {
    return PAPER;
  } else if (randomValue > 0.67) {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice == pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};
//   cChoice == pChoice
//     ? RESULT_DRAW
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? RESULT_PLAYER_WIN
//     : RESULT_COMPUTER_WIN;

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game Is Starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message;
  if (winner === RESULT_DRAW) {
    message = `YOU PICKED ${playerChoice} , COMPUTER PICKED ${computerChoice} , THEREFORE YOU HAD A DRAW.!`;
  } else if (winner === RESULT_PLAYER_WIN) {
    message = `YOU PICKED ${playerChoice} , COMPUTER PICKED ${computerChoice} , THEREFORE YOU WON.!`;
  } else if (winner === RESULT_COMPUTER_WIN) {
    message = `YOU PICKED ${playerChoice} , COMPUTER PICKED ${computerChoice} , THEREFORE YOU LOST!.`;
  }
  alert(message);
  gameIsRunning = false;
});

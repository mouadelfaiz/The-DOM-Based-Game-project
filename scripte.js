let userScore = 0;
let computerScore = 0;
let gameOver = false;
let winner;
let result;

const user = document.querySelector("#your-choice");
const computer = document.querySelector("#computer-choice");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const finalResult = document.querySelector(".result");
const theWinner = document.querySelector(".winner");

user.innerHTML = "👨";
computer.innerHTML = "💻";

function computerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  compChoice = choices[Math.floor(Math.random() * 3)];
  if (compChoice === "Rock") {
    computer.innerHTML = "&#9994";
  } else if (compChoice === "Paper") {
    computer.innerHTML = "&#9995";
  } else {
    computer.innerHTML = "&#9996";
  }
  return compChoice;
}

function whoWins(uChoice, cChoice) {
  if (
    (uChoice === "Rock" && cChoice === "Scissors") ||
    (uChoice === "Paper" && cChoice === "Rock") ||
    (uChoice === "Scissors" && cChoice === "Paper")
  ) {
    result = "You win the round!";
    userScore++;
  } else if (uChoice === cChoice) {
    result = "It's a tie!";
  } else {
    result = "Computer wins the round!";
    computerScore++;
  }
  if (userScore === 10) {
    theWinner.innerHTML = "The winnner is the You";
  } else if (computerScore === 10) {
    theWinner.innerHTML = "The winner is the Computer";
  }
  finalResult.innerText = `You chose: ${uChoice}, and The computer chose: ${cChoice}, ${result}`;
  userScoreDisplay.innerText = `Your Score: ${userScore} pt`;
  computerScoreDisplay.innerText = `Computer Score: ${computerScore} pt`;
  if (userScore === 10 || computerScore === 10) {
    setTimeout(() => alert("The Game Is Over!!!! Click Restart"), 1000);
  }
  return result;
}

rock.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target.id);
  user.innerHTML = "&#9994";
  whoWins(event.target.id, computerChoice());
});
paper.addEventListener("click", (event) => {
  user.innerHTML = "&#9995";
  whoWins(event.target.id, computerChoice());
});
scissors.addEventListener("click", (event) => {
  user.innerHTML = "&#9996";
  whoWins(event.target.id, computerChoice());
});

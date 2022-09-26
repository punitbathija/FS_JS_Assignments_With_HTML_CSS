// Targeting all the elements to make the game

let userScore = document.querySelector("#userScoreVal");

let compScore = document.querySelector("#compScoreVal");

let rock = document.querySelector("#r");

let paper = document.querySelector("#p");

let scissor = document.querySelector("#s");

let userResult = document.querySelector("#result-user-stat");

let compResult = document.querySelector("#result-comp-stat");

let finalResult = document.querySelector("#result-final-stat");

// Initializing scores to update the DOM Elements dynamically

let playerScore = 0;

let computerScore = 0;

// Initilizing variables to store returned data and perform functions

let playerChoice;

let computerChoice;

let choices = ["Rock", "Paper", "Scissor"];

// A function to add value to playerChoice and computerChoice

function playRound() {
  if (playerChoice === "Rock") {
    userResult.innerText = "User: Rock";
  }
  if (computerChoice === "Rock") {
    compResult.innerText = "Computer: Rock";
  }
  if (playerChoice === "Paper") {
    userResult.innerText = "User: Paper";
  }
  if (computerChoice === "Paper") {
    compResult.innerText = "Computer: Paper";
  }
  if (playerChoice === "Scissor") {
    userResult.innerText = "User: Scissor";
  }
  if (computerChoice === "Scissor") {
    compResult.innerText = "Computer: Scissor";
  }

  decideWinner();

  // A function to compare the results of both selection

  function decideWinner() {
    if (playerChoice === computerChoice) {
      finalResult.innerText = "It's a tie...";
    }

    if (
      (computerChoice === "Rock" && playerChoice === "Paper") ||
      (computerChoice === "Paper" && playerChoice === "Scissor") ||
      (computerChoice === "Scissor" && playerChoice === "Rock")
    ) {
      playerScore++;
      userScore.innerText = playerScore;
      compScore.innerText = computerScore;
      finalResult.innerText = "User Won!";
    }

    if (
      (playerChoice === "Rock" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Scissor") ||
      (playerChoice === "Scissor" && computerChoice === "Rock")
    ) {
      computerScore++;
      userScore.innerText = playerScore;
      compScore.innerText = computerScore;
      finalResult.innerText = "Computer Won!";
    }
  }
}

// A function to get computer choice

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Adding event listeners to get user input and compare it with computer input

rock.addEventListener("click", function () {
  playerChoice = "Rock";
  computerChoice = getComputerChoice();
  playRound();
});

paper.addEventListener("click", function () {
  playerChoice = "Paper";
  computerChoice = getComputerChoice();
  playRound();
});

scissor.addEventListener("click", function () {
  playerChoice = "Scissor";
  computerChoice = getComputerChoice();
  playRound();
});

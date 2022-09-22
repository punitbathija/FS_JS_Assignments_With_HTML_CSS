// Targeting all the elements to make the game

let userScore = document.querySelector("#userScoreVal");

let compScore = document.querySelector("#compScoreVal");

let rock = document.querySelector("#r");

let paper = document.querySelector("#p");

let scissor = document.querySelector("#s");

let userResult = document.querySelector("#result-user-stat");

let compResult = document.querySelector("#result-comp-stat");

let finalResult = document.querySelector("#result-final-stat");

let pChoice;
let cChoice;

// Letting the player choose from the options

function playerChoice() {
  rock.addEventListener("click", function () {
    console.log("player choose rock");
    pChoice = "rock";
  });

  paper.addEventListener("click", function () {
    console.log("player choose paper");
    pChoice = "paper";
  });

  scissor.addEventListener("click", function () {
    console.log("player choose scissor");
    playerChoice = "scissor";
  });
  return pChoice;
}

playerChoice();

// Taking the random choice from the computer

const getComputersChoice = () => {
  let cChoice = Math.floor(Math.random() * 3);
  switch (cChoice) {
    case 0: {
      return "stone";
    }

    case 1: {
      return "paper";
    }
    case 2: {
      return "scissor";
    }
  }
  return cChoice;
};

getComputersChoice();

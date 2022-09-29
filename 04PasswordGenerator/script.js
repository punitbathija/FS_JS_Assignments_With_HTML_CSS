// Targeting all the elements needed for achieving the task

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower(),
  upper: getRandomUpper(),
  number: getRandomNumber(),
  symbol: getRandomSymbol(),
};

// Adding an eventlistener to copy the passowrd

clipboardEl.addEventListener("click", () => {
  let password = document.createElement("input");
  let finalPassword = resultEl.innerText;
  password.value = finalPassword;
  document.body.append(password);
  password.select();
  document.execCommand("copy");
  password.remove();
});

// Adding an eventlistener to generate random password on click

generateEl.addEventListener("click", () => {
  resultEl.textContent = generatePassword();
});

// Function to generate the password

function generatePassword(lower, upper, number, symbol, length) {
  length = lengthEl.value;
  let array = [];
  for (let i = 0; i <= length; i++) {
    if (lowercaseEl.checked) {
      lower = getRandomLower();
    }
    if (uppercaseEl.checked) {
      upper = getRandomUpper();
    }
    if (numbersEl.checked) {
      number = getRandomNumber();
    }
    if (numbersEl.checked) {
      symbol = getRandomSymbol();
    }
    chars = [lower, upper, number, symbol];

    var randomNumber = chars[Math.floor(Math.random() * chars.length)];
    array.push(randomNumber);
  }
  return array.join("");
}

// Function to get random lower case character

function getRandomLower() {
  let char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let lowerC = char[Math.floor(Math.random() * char.length)];
  return lowerC;
}

// Function to get random upper case character

function getRandomUpper() {
  let char = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upperC = char[Math.floor(Math.random() * char.length)].toUpperCase();
  return upperC;
}

// Function to get random number character

function getRandomNumber() {
  let char = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numberC = char[Math.floor(Math.random() * char.length)];
  return numberC;
}

// Function to get random symbol character

function getRandomSymbol() {
  let char = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "+",
    "=",
    ".",
    "/",
    ";",
    "<",
    ">",
    "{",
    "}",
  ];
  let symbolC = char[Math.floor(Math.random() * char.length)];
  return symbolC;
}

//Targeting all the elements
let input = document.querySelector("#text");
let convertBtn = document.querySelector("#convert-btn");
let camelCase = document.querySelector("#camel-case");
let pascalCase = document.querySelector("#pascal-case");
let snakeCase = document.querySelector("#snake-case");
let screamingSnakeCase = document.querySelector("#screaming-snake-case");
let kebabCase = document.querySelector("#kebab-case");
let screamingKebabCase = document.querySelector("#screaming-kebab-case");

//Function to covert input to camel case
function toCamelCase(input) {
  let char = input.toLowerCase().split(" ");
  for (let i = 1; i < char.length; i++) {
    char[i] = char[i][0].toUpperCase() + char[i].substr(1);
  }
  camelCase.innerText = char.join("");
}

//Function to covert input to pascal case
function toPascalCase(input) {
  let char = input.toLowerCase().split(" ");
  for (let i = 0; i < char.length; i++) {
    char[i] = char[i][0].toUpperCase() + char[i].substr(1);
  }
  pascalCase.innerText = char.join("");
}

//Function to covert input to snake case
function toSnakeCase(input) {
  let char = input.toLowerCase().split(" ");
  snakeCase.innerText = char.join("_");
}

//Function to convert input to screaming snake case
function toScreamingSnakeCase(input) {
  let char = input.toUpperCase().split(" ");
  screamingSnakeCase.innerText = char.join("_");
}

//Function to covert input to kebab case
function toKebabCase(input) {
  let char = input.toLowerCase().split(" ");
  kebabCase.innerText = char.join("-");
}

//Function to convert input to screaming kebab case
function toScreamingKebabCase(input) {
  let char = input.toUpperCase().split(" ");
  screamingKebabCase.innerText = char.join("-");
}

//Adding Event Listener's to our button
convertBtn.addEventListener("click", () => {
  toCamelCase(input.value);
  toPascalCase(input.value);
  toSnakeCase(text.value);
  toScreamingSnakeCase(text.value);
  toKebabCase(text.value);
  toScreamingKebabCase(text.value);
});

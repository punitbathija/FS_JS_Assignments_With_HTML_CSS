// Targeting all the elemnts needed
let btn = document.querySelector("#button");
let canvas = document.querySelector("#canvas");

// Function to get random color codes
const randomColor = () => {
  let colorCode = "0123456789ABCDEF";
  let pound = "#";
  for (let i = 0; i < 6; i++) {
    pound = pound + colorCode[Math.floor(Math.random() * 16)];
  }
  return pound;
};

// Adding the color code to the text area in the canvas
btn.addEventListener("click", function showColorCode() {
  canvas.innerText = `Background color will change when Button is clicked.
                                The color code is :- ${randomColor()}`;
});

// Adding an event listener to change the color on button click
btn.addEventListener("click", function applyColorToCanvas() {
  canvas.style.backgroundColor = randomColor();
});

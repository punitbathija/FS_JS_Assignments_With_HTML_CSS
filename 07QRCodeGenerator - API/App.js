// Targeting all the elements needed to achieve the task

let submitBtn = document.getElementById("submit");
let input = document.getElementById("input");
let div = document.getElementById("main");
let img = document.getElementById("img");

// Function to generate the qr code

async function generateQrCode() {
  let qrCodeLib = `http://api.qrserver.com/v1/create-qr-code/?data=${input.value}&size=100x100`;
  let fetchQrCodeLib = await fetch(qrCodeLib);
  let qrCode = await fetchQrCodeLib;
  img.src = qrCode.url;
}

// Adding Eventlistener to the button

submitBtn.addEventListener("click", generateQrCode);

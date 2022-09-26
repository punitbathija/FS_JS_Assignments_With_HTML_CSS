// Targeting all the elemnets needed to execute the task

let jokeBody = document.querySelector("#joke");
let jokeBtn = document.querySelector("#jokeBtn");

// Function to get the joke from the api

async function getJoke(){
    const res = await fetch("http://icanhazdadjoke.com", {
        headers: {
            Accept : "application/json",
        },
    });

    return res.json();
}

// Function to refresh the joke

async function populateJokeOnBtnClick(){
    const { joke } = await getJoke();
    jokeBody.textContent = joke;
}

// Adding event listener to the button

jokeBtn.addEventListener("click", populateJokeOnBtnClick);

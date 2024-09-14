function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice(number) {
    humanChoice = prompt('Enter "Rock" "Paper" or "Scissors"');
    humanChoice = humanChoice.toLowerCase();
}
let gameOver = false
while(gameOver != true) {
getHumanChoice()

let computerChoice = getComputerChoice(3);

if (computerChoice === 0 && humanChoice === "rock") {
    console.log("Computer chose rock. Tie!");
}

else if (computerChoice === 0 && humanChoice === "paper") {
    console.log("Computer Chose rock. You win!");
}

else if (computerChoice === 0 && humanChoice === "scissors") {
    console.log("Computer Chose rock. You lose!");
}



else if (computerChoice === 1 && humanChoice === "rock") {
    console.log("Computer Chose paper. You lose!");
}

else if (computerChoice === 1 && humanChoice === "paper") {
    console.log("Computer Chose paper. Tie!");
}

else if (computerChoice === 1 && humanChoice === "scissors") {
    console.log("Computer Chose paper. You win!");
}



else if (computerChoice === 2 && humanChoice === "rock") {
    console.log("Computer Chose scissors. You win!");
}

else if (computerChoice === 2 && humanChoice === "paper") {
    console.log("Computer Chose scissors. You lose!");
}

else if (computerChoice === 2 && humanChoice === "scissors") {
    console.log("Computer Chose scissors. Tie!");
}

keepPlaying = prompt('Keep playing? "Yes" or "No"?');
keepPlaying = keepPlaying.toLowerCase();

if (keepPlaying === "no") {
    gameOver = True;
}


}
console.log("Thanks for playing!")

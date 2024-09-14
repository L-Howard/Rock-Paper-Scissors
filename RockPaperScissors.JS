function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice(number) {
    humanChoice = prompt('Enter "Rock" "Paper" or "Scissors"');
    humanChoice = humanChoice.toLowerCase();
}

console.log("Rock, Paper, Scissors 5 rounds");

let gameOver = false
while(gameOver != true) {
    let computerScore = 0;
    let humanScore = 0;
for(let i = 0; i < 5; i++){
getHumanChoice()

let computerChoice = getComputerChoice(3);


if (computerChoice === 0 && humanChoice === "rock") {
    console.log("Computer chose rock. Tie!");
}

else if (computerChoice === 0 && humanChoice === "paper") {
    console.log("Computer Chose rock. You win!");
    humanScore = humanScore + 1;
}

else if (computerChoice === 0 && humanChoice === "scissors") {
    console.log("Computer Chose rock. You lose!");
    computerScore = computerScore + 1
}



else if (computerChoice === 1 && humanChoice === "rock") {
    console.log("Computer Chose paper. You lose!");
    computerScore = computerScore + 1
}

else if (computerChoice === 1 && humanChoice === "paper") {
    console.log("Computer Chose paper. Tie!");
}

else if (computerChoice === 1 && humanChoice === "scissors") {
    console.log("Computer Chose paper. You win!");
    humanScore = humanScore + 1;
}



else if (computerChoice === 2 && humanChoice === "rock") {
    console.log("Computer Chose scissors. You win!");
    humanScore = humanScore + 1
}

else if (computerChoice === 2 && humanChoice === "paper") {
    console.log("Computer Chose scissors. You lose!");
    computerScore = computerScore + 1
}

else if (computerChoice === 2 && humanChoice === "scissors") {
    console.log("Computer Chose scissors. Tie!");
}
}
if (computerScore < humanScore) {
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + humanScore);
    console.log("You win!");
}

else if (computerScore > humanScore) {
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + humanScore);
    console.log("You lose!");
}

else {
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + humanScore);
    console.log("Tie!");
}


keepPlaying = prompt('Keep playing? "Yes" or "No"?');
keepPlaying = keepPlaying.toLowerCase();

if (keepPlaying === "no") {
    gameOver = true;
}


}
console.log("Thanks for playing!")

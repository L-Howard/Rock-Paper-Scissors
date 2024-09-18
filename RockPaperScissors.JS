function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const score = document.querySelector(".score");
const roundResult = document.querySelector(".roundResult");


rock.addEventListener("click", roundStartRock);
paper.addEventListener("click", roundStartPaper);
scissors.addEventListener("click", roundStartScissors);


function roundStartRock() {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice(3);

    if (computerChoice === 0 && humanChoice === "rock") {
       roundResult.textContent = "Computer chose rock. Tie!";
    }
    
    
    else if (computerChoice === 1 && humanChoice === "rock") {
        roundResult.textContent = "Computer chose paper. You lose!";
        computerScore = computerScore + 1
    }
    
    
    else if (computerChoice === 2 && humanChoice === "rock") {
        roundResult.textContent = "Computer chose scissors. You win!";
        humanScore = humanScore + 1
    }
    score.textContent = "Your score: " + humanScore + " Computer score: " + computerScore;
    roundCounter++

    if (roundCounter === 5) {
        if(humanScore === computerScore) {
            score.textContent = "End of 5 rounds. Game is a tie!"
    
        }
        else if(humanScore > computerScore) {
            score.textContent = "End of 5 rounds. You won!"
        }
        else {
            score.textContent = "End of 5 rounds. You lost!"
        }
    humanScore = 0
    computerScore = 0
    roundCounter = 0
    }
    
    
}
function roundStartPaper() {

    let humanChoice = "paper"
    let computerChoice = getComputerChoice(3);

    if (computerChoice === 0 && humanChoice === "paper") {
        roundResult.textContent = "Computer chose rock. You win!";
        humanScore = humanScore + 1;
    }

    else if (computerChoice === 1 && humanChoice === "paper") {
        roundResult.textContent = "Computer chose paper. Tie!";
    }

    else if (computerChoice === 2 && humanChoice === "paper") {
        roundResult.textContent = "Computer chose scissors. You lose!";
        computerScore = computerScore + 1
    }
    score.textContent = "Your score: " + humanScore + " Computer score: " + computerScore;
    roundCounter++

    if (roundCounter === 5) {
        if(humanScore === computerScore) {
            score.textContent = "End of 5 rounds. Game is a tie!"
    
        }
        else if(humanScore > computerScore) {
            score.textContent = "End of 5 rounds. You won!"
        }
        else {
            score.textContent = "End of 5 rounds. You lost!"
        }
        humanScore = 0
        computerScore = 0
        roundCounter = 0
    
    }
    
    
}

function roundStartScissors() {

    let humanChoice = "scissors";
    let computerChoice = getComputerChoice(3);

    if (computerChoice === 0 && humanChoice === "scissors") {
        roundResult.textContent = "Computer chose rock. You lose!";
        computerScore = computerScore + 1
    }

    else if (computerChoice === 1 && humanChoice === "scissors") {
        roundResult.textContent = "Computer chose paper. You win!";
        humanScore = humanScore + 1;
    }

    else if (computerChoice === 2 && humanChoice === "scissors") {
        roundResult.textContent = "Computer chose scissors. Tie!";
    }
    score.textContent = "Your score: " + humanScore + " Computer score: " + computerScore;
    roundCounter++
    if (roundCounter === 5) {
    if(humanScore === computerScore) {
        score.textContent = "End of 5 rounds. Game is a tie!"

    }
    else if(humanScore > computerScore) {
        score.textContent = "End of 5 rounds. You won!"
    }
    else {
        score.textContent = "End of 5 rounds. You lost!"
    }
    humanScore = 0
    computerScore = 0
    roundCounter = 0
}
}








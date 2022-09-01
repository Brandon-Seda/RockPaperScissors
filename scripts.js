
let rock = 0;
let paper = 1;
let scissors = 2;
let selection = " "

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        selection = button.id
        play(selection)
    })
})



function getComputerChoice(){
    let computerGuess = Math.floor(Math.random() * 3);

    if (computerGuess === rock){
        return "rock";
    }
    else if(computerGuess === paper){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function play(playerSelection){
    
    let computerSelection = getComputerChoice();

    if (checkWin(playerSelection, computerSelection) === "draw"){
        alert("It was a draw! Try again!");
    }
    else if(checkWin(playerSelection, computerSelection) === "win"){
        alert("You have won!");
    }
    else {
        alert("You have lost! Try again!")
    }

}




//win checking function that returns loss, win, or draw

function checkWin(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        return "draw"
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        return "win";
    } 
    else  if (playerChoice == "scissors" && computerChoice == "paper") {
        return "win";
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        return "win";
    }
    else {
        return "loss";
    }
}
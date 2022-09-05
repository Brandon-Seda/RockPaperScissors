
let rock = 0;
let paper = 1;
let scissors = 2;
let selection = " ";

let win = 0;
let loss = 0;
let draw = 0;


const display = document.querySelector('.display');
const scoreboard = document.querySelector('.scoreboard');
const buttons = document.querySelectorAll('button');

const wins = document.createElement('div');
wins.setAttribute('id', 'wins');
wins.textContent = "Wins: " + win.toString();

const losses = document.createElement('div');
losses.setAttribute('id', 'losses');
losses.textContent = "Losses: " + loss.toString();

const draws = document.createElement('div');
draws.setAttribute('id', 'draws');
draws.textContent = "Draws: " + draw.toString();

scoreboard.append(wins);
scoreboard.append(losses);
scoreboard.append(draws);


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
        draw += 1
        document.getElementById('draws').textContent = "Draws: " + draw.toString() 
        alert("It was a draw! Try again!");
    }
    else if(checkWin(playerSelection, computerSelection) === "win"){
        win += 1;
        document.getElementById('wins').textContent = "Wins: " + win.toString() 
        alert("You have won!");
    }
    else {
        loss += 1;
        document.getElementById('losses').textContent = "Losses: " + loss.toString() 
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
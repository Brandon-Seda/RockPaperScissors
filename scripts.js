
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
const results = document.querySelector('.result');

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

const gameResult = document.createElement('div');
gameResult.setAttribute('id', 'gameResult');
gameResult.textContent = "Pick your choice!";

results.append(gameResult);

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
        document.getElementById('draws').textContent = "Draws: " + draw.toString(); 
        document.getElementById('gameResult').textContent = "It was a draw!";
    }
    else if(checkWin(playerSelection, computerSelection) === "win"){
        win += 1;
        document.getElementById('wins').textContent = "Wins: " + win.toString();
        document.getElementById('gameResult').textContent = playerSelection + " beats " + computerSelection + "!";
    }
    else {
        loss += 1;
        document.getElementById('losses').textContent = "Losses: " + loss.toString();
        document.getElementById('gameResult').textContent = computerSelection + " beats " + playerSelection + "!";
    }


    scoreCheck();
   
}

function scoreCheck(){
    if(win === 5){
        document.getElementById('gameResult').textContent = "Game Over! You have won 5 rounds!!";
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
    else if(loss === 5){
        document.getElementById('gameResult').textContent = "Game Over! You have lost 5 rounds!!";
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
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
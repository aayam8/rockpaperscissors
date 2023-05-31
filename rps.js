// take input from user as rock, paper or scissor
// generate a response from computer to play with user
// compare the user input and computer input to determine win, loss or a draw
// advanced := create a game set to determine the ultimate winner ex: best of five 
// keep score (Remaining);
function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissor'];
  let   random = Math.floor(Math.random() * (2-0+1)) + 0;
  return choice[random];
}

function playround(playerSelection, computerSelection){
 let computerChoice = computerSelection.toLowerCase(); 
 if(playerSelection == computerChoice){
  return console.log('The game is draw');
 } else if ((computerChoice == 'rock' && playerSelection == 'scissor') ||
    (computerChoice == 'paper' && playerSelection == 'rock') ||
    (computerChoice == 'scissor' && playerSelection == 'paper')){
  return console.log('Too Bad!! You Loose!');
  } else {
    console.log('Congratulation!! You Win!');
  }
}

function game() {
  for (let index = 1; index <= 5; index++) {  
    let playerSelection = prompt('Rock, Paper, Scissor Shoot!!!').toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    playround(playerSelection, computerSelection);
  }  
}


// function call for game 
game();


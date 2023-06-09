// take input from user as rock, paper or scissor
// generate a response from computer to play with user
// compare the user input and computer input to determine win, loss or a draw
// advanced := create a game set to determine the ultimate winner ex: best of five 
// keep score (Remaining);
function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissor'];
  let random = Math.floor(Math.random() * (2-0+1)) + 0;
  return choice[random];
}

function Results(number) {
  const container = document.querySelector('#container');
  const div = document.createElement('div');
  const score = document.createElement('div');
  let computerScore = 0;
  let playerScore = 0;
  if (number == 0) {
   div.textContent = 'The Match Ends in a Draw !!! '; 
   score.textContent = `Player Score : ${playerScore}  Computer Score: ${computerScore}`
   container.appendChild(div);
   container.appendChild(score);
  } else if (number == 1) {
      computerScore = computerScore + 1;
      score.textContent = `Player Score : ${playerScore}  Computer Score: ${computerScore}`
      div.textContent = 'Too Bad You Loose the Match !!!';
      container.appendChild(div);
      container.appendChild(score);
  } else if (number == 2){
     playerScore = playerScore + 1;
     score.textContent = `playerScore : ${playerScore}  computerScore: ${computerScore}` 
     div.textContent = 'Congratulations You Win the Match !!!';
     container.appendChild(div);  
     container.appendChild(score);
  }
}

function playround(playerSelection, computerSelection){
 let computerChoice = computerSelection.toLowerCase(); 
 let id = 0;
 if(playerSelection == computerChoice){
  let id = 0;
  return id; 
  } else if ((computerChoice == 'rock' && playerSelection == 'scissor') ||
    (computerChoice == 'paper' && playerSelection == 'rock') ||
    (computerChoice == 'scissor' && playerSelection == 'paper')){
    let id = 1;
    return id;
  } else {
    let id = 2;
    return id;
  }
}

const buttons = document.querySelectorAll('button');
let playerSelection = '';
let computerChoice = '';
let roundInformation = 0;   
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id.toLowerCase();
    console.log('Your Selection is : ' + playerSelection);
    let computerChoice = getComputerChoice();
    console.log("Computer's Selection is :" + computerChoice);
    let roundInformation = playround(playerSelection, computerChoice);
    console.log(roundInformation);
    Results(roundInformation);
  });
});




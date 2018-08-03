let gamePlaying;
let playerScore = 0;
let computerScore = 0;

init();

function init() {
  // Game State
  gamePlaying = true;
}

if(gamePlaying) {
  function computerPlay() {
    let type = ['rock', 'paper', 'scissors'];
    let typeNum = Math.floor(Math.random()*3);
    console.log(type[typeNum]);
    return type[typeNum];
  }
  
  function playerPlay() {
    let selection = prompt('Enter rock/paper/scissors').toLowerCase();
    return selection;
  }
  
  function playRound (playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
      playerScore++;
      computerScore++;
      return 'It\'s a draw!';
    } 
    if(playerSelection === 'rock') {
      if(computerSelection === 'scissors') {
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
      } 
      if(computerSelection === 'paper') {
        computerScore++;
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
      }
    }
    if(playerSelection === 'paper') {
      if(computerSelection === 'rock') {
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
      } 
      if(computerSelection === 'scissors') {
        computerScore++;
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
      }
    }
    if(playerSelection === 'scissors') {
      if(computerSelection === 'paper') {
        playerScore++;
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
      }
      if(computerSelection === 'rock') {
        computerSCore++;
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
      }
    }
  }

  function gameWinner() {
    if(playerScore > computerScore) {
      return(`You have ${playerScore} points, greater than ${computerScore}, You win the game!`);
    } else if(playerScore < computerScore) {
      return(`You have ${playerScore} points, smaller than ${computerScore}, You loose!`);
    } 
    else {
      return(`It's a tie! ${playerScore} equal to ${computerScore}`);
    }
  }

  function game(rounds) {
    for( let i = 0; i < rounds; i++) {
      let playerSelection = playerPlay();
      let computerSelection = computerPlay();
      let result = playRound (playerSelection, computerSelection); 
      console.log(result);
    }
    let theResult = gameWinner();
    console.log(theResult);
  }
}

game(5);















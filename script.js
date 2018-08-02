let scores, totalScore, player, gamePlaying;

init();

function init() {
  scores=[0,0];
  player = [0,1];

  // State variable
  gamePlaying = true;
}

if(gamePlaying) {
  function computerPlay() {
    let type = ['Rock', 'Paper', 'Scissors'];
    let typeNum = Math.floor(Math.random()*3);
    console.log(type[typeNum]);
    return(type[typeNum]);
  }
  
  function playerPlay() {
    let selection = prompt('Enter Rock/Paper/Scissors');
    return selection;
  }
  
  function playRound (playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
      return 'It\'s a draw!';
    } 
    else if(playerSelection === 'Rock') {
      if(computerSelection === 'Scissors') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
      } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
      }
    }
    else if(playerSelection === 'Paper') {
      if(computerSelection === 'Rock') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
      } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
      }
    }
    else if(playerSelection === 'Scissors') {
      if(computerSelection === 'Paper') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
      } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
      }
    }

    game();
  }

  const playerSelection = playerPlay();
  const computerSelection = computerPlay();

  console.log(playRound(playerSelection, computerSelection));

  function game() {
    let round = 5;

    if(round > 5) {
      gamePlaying = false;
    } else {
      gamePlaying = true;
    }
  }



  // Show total Score

}



let playerScore = 0;
let computerScore = 0;


  function computerPlay() {
    let type = ['rock', 'paper', 'scissors'];
    let typeNum = Math.floor(Math.random()*3);
    return type[typeNum];
  }

  // function playerPlay() {
  //   let selection = this.value;
  //   return selection;
  // }

  function playerPlay(e) {
    let selection = e.target.value;
    return selection;
  }

 let btns = document.querySelectorAll('.btn');

// Ambil value dari button yg di klik
//  btns.forEach(btn => btn.addEventListener('click', (e) => {
//   let selection = e.target.value;
//   console.log(selection);
//   return selection;
//  }));

// Ambil value dari button yg di klik, kemudian return valuenya ke playerPlay function
// btns.forEach(btn => btn.addEventListener('click', playerPlay));

function getRoundResult(n) {
  let result = document.querySelector('.result__round');
  result.textContent = n;
}

function getFinalResult(z) {
  let finalResult = document.querySelector('.result__final');
  finalResult.textContent = z;
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
      computerScore++;
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

const playButton = Array.from(document.querySelectorAll('.btn'));
const restartButton = document.querySelector('.restart__button');

function restart() {
  computerScore = 0;
  playerScore = 0;
  scoreText();
  playButton.forEach(key => key.disabled = false);
}

function scoreText() {
  const playerScoreText = document.querySelector('.player__score');
  const computerScoreText = document.querySelector('.computer__score');

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
}

function game(e) {
  let computerSelection = computerPlay();
  let playerSelection = playerPlay(e);

  let roundResult = playRound(playerSelection, computerSelection);
  if(computerScore < 5 && playerScore < 5) {
    getRoundResult(roundResult);
  } else if (computerScore >= 5 || playerScore >= 5) {
    getRoundResult(roundResult);
    getFinalResult(gameWinner());
    playButton.forEach(key => key.disabled = true);
  }
  scoreText();
}

// Run the game  
playButton.forEach(key => key.onclick = game);

// Restart game
restartButton.onclick = restart;
















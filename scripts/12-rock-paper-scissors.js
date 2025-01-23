const resultOfGame = JSON.parse(localStorage.getItem('gameData')) || {
  wins: 0,
  losses: 0,
  ties: 0
};



updateScoreElement();

function resetScore() {

  resultOfGame.wins = 0;
  resultOfGame.losses = 0;
  resultOfGame.ties = 0;

  localStorage.removeItem('gameData');

  alert(`Score has been reset.
Wins: ${resultOfGame.wins}, Losses: ${resultOfGame.losses}, Ties: ${resultOfGame.ties}`);

}

let isAutoPlaying = false;
let intervalID; 

function autoPlay() {
  if(!isAutoPlaying) {
    intervalID = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
 
}

function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';
    }
    else if (computerMove === 'Paper') {
      result = 'You win!';
    }
    else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win!';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') { result = 'You lose.'; }

  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';

    } else if (computerMove === 'Scissors') {
      result = 'You win!';
    }
  }

  //-------------------------------------UPDATE SCORE--------------------------------
  if (result === 'You win!') {
    resultOfGame.wins++; // Same as resultOfGame.wins = resultOfGame.wins + 1; Which is the same as resultOfGame.wins += 1;

  } else if (result === 'Tie.') {
    resultOfGame.ties++; //
  } else if (result === 'You lose.') {
    resultOfGame.losses++;
  }

  localStorage.setItem('gameData', JSON.stringify(resultOfGame)); // The localStorage.setItem method requrires two argumetns. A name to store it under and the value of what you are storing. 

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML =
    `You picked: <img src ="images/${playerMove}-emoji.png" class="move-icon"> The computer picked: <img src="images/${computerMove}-emoji.png" class ="move-icon">`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =
    `Wins: ${resultOfGame.wins}, Losses: ${resultOfGame.losses}, Ties: ${resultOfGame.ties}`;
}

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';

  }

  return computerMove;

}


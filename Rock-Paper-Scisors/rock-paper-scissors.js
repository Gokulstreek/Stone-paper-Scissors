let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
updateScoreElement();



/*
if(!score)
{
score={
  wins:0,
  losses:0,
  ties:0
};
}
*/


function playGame(playerMove) {
  const computerMove = pick_move();

  let r = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      r = 'You lose.';
    } else if (computerMove === 'paper') {
      r = 'You win.';
    } else if (computerMove === 'scissors') {
      r = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      r = 'You win.';
    } else if (computerMove === 'paper') {
      r = 'Tie.';
    } else if (computerMove === 'scissors') {
      r = 'You lose.';
    }

  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      r = 'Tie.';
    } else if (computerMove === 'paper') {
      r = 'You lose.';
    } else if (computerMove === 'scissors') {
      r = 'You win.';
    }
  }
  if (r === 'You win.') {
    score.wins += 1;
  } else if (r === 'You lose.') {
    score.loses += 1;
  } else if (r === 'Tie.') {
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = r;
  document.querySelector('.js-moves').innerHTML = ` You
    <img src="/Image/${playerMove}-emoji.png" class="move-icon">
    <img src="/Image/${computerMove}-emoji.png" class="move-icon">
    `;
}
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins : ${score.wins} , Loses : ${score.loses} , Tie : ${score.ties} `;
}

let comp1 = '';
function pick_move() {
  const randno = Math.random();
  if (randno >= 0 && randno < 1 / 3) {
    comp1 = 'rock';
  }
  else if (randno >= 1 / 3 && randno < 2 / 3) {
    comp1 = 'paper';
  }
  else if (randno >= 2 / 3 && randno < 1) {
    comp1 = 'scissors';
  }
  return comp1;
}

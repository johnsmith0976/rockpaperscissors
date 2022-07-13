let player = prompt('pick rock, paper, or scissors');

function computer(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let a = computer(0, 3);

  function rps() {
  if (a === 0) {
    alert('I choose rock');
  }
  else if (a === 1) {
    alert('I choose paper');
  }
  else if (a === 2) {
    alert('I choose scissors');
  }
}
rps();

  function round() {
if (player = 'rock' && a === 2) {
    alert('You win')
}
else if (player = 'rock' && a === 1) {
    alert('You lose')
  }
  else if (player = 'paper' && a === 2) {
    alert('You lose')
  }
  else if (player = 'paper' && a === 0) {
    alert('You win')
  }
  else if (player = 'scissors' && a === 0) {
    alert('You lose')
  }
  else if (player = 'scissors' && a === 1) {
    alert('You win')
  }
  else {
    alert('draw')
  }

}
  round();


  function ciEquals(x, y) {
    return typeof x === 'string' && typeof y === 'string'
        ? x.localeCompare(y, undefined, { sensitivity: 'accent' }) === 0
        : x === y;
}
  

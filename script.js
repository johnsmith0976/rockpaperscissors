



function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
      return "rock" + randomNumber;
  }
  else if (randomNumber === 2) {
      return "paper" + randomNumber;
  }
  else if (randomNumber === 3) {
      return "scissors" + randomNumber;
  }
}

let a = computerPlay();
let pos = 0;

  function round(plate, computerPla) {
if ((plate === "rock") && (computerPla === "scissors")) {
    pos++;
    return "You win rs"
}
  else if ((plate === "paper") && (computerPla === "rock")) {
    pos++;
    return "You win pr"
  }
  else if ((plate === "scissors") && (computerPla === "paper")) {
    pos++;
    return "You win sp"
  }
  else if (plate === computerPla) {
      return "draw";
    } 
  else {
    pos--;
    return "You lose";
  } 
  } 


function game(selection) {
  return round(selection, computerPlay());
}
let i= 0;

  while (i < 5) {
let player = prompt("pick rock, paper, or scissors");
alert(computerPlay());
  alert(game(player));
i++
}

  

if (i == 5 && pos >= 1) {
  alert("you won!!!!")
}
else  if (i == 5 && pos == 0) {
  alert("you drew with the computer????")
}
else if (i == 5 && pos < 0) {
  alert("you lost ;-;")
}

 
  

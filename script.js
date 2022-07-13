



function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
      return "rock";
  }
  else if (randomNumber === 2) {
      return "paper";
  }
  else if (randomNumber === 3) {
      return "scissors"
  }
}
let a = computerPlay();
let pos = 0;

  function round(plate, computerPla) {
  
if ((plate === "rock") && (computerPla === "scissors")) {
    pos++;
    return "You win"
}
else if ((plate === "rock") && (computerPla === "paper")) {
    pos--;
    return "You lose"
  }
  else if ((plate === "paper") && (computerPla === "scissors")) {
    pos--;
    return "You lose"
  }
  else if ((plate === "paper") && (computerPla === "rock")) {
    pos++;
    return "You win"
  }
  else if ((plate === "scissors") && (computerPla === "rock")) {
   pos--;
   return "You lose"
  }
  else if ((plate === "scissors") && (computerPla === "paper")) {
    pos++;
    return "You win"
  }
  else {
    if (plate === "rock" && computerPla === "rock") {
      return "draw";
    } 
    else if (plate === "scissors" && computerPla === "scissors"){
      return "draw";
    }
    else if (plate === "paper" && computerPla === "paper") {
      return "draw";
    }
   
  } 

}
function game(selection, dog) {
  return round(selection, dog);
}
let i= 0;

  while (i < 5) {
let player = prompt("pick rock, paper, or scissors");
alert(computerPlay());
  alert(game(player, computerPlay()));
 



    
 
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

 
  

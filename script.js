const buttons = document.querySelectorAll("button");
buttons.forEach(function(item){
  item.addEventListener("click", function(e){
    console.log(playRound(item.id));
  });
});

// function myFunction(item){
//   item.addEventListener("click", function(e){
//     console.log(playRound(item.id));
//   });
// }

function computerPlay(){
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection){
  let ans = "Try again, something went wrong!";
  let play = playerSelection.toLowerCase();
  let computerSelection = computerPlay();
  let comp = computerSelection.toLowerCase();
  if(play == comp){
    ans = "It's a draw, you both chose "+computerSelection+"!";
  }
  else if(play == "rock"){
    if(comp == "paper"){
      ans = "You lose! Paper beats Rock!";
    }
    else{
      ans = "You win! Rock beats Scissors!";
    }
  }
  else if(play == "paper"){
    if(comp == "scissors"){
      ans = "You lose! Scissors beats Paper!";
    }
    else{
      ans = "You win! Paper beats Rock!";
    }
  }
  else if(play == "scissors"){
    if(comp == "rock"){
      ans = "You lose! Rock beats Scissors!";
    }
    else{
      ans = "You win! Scissors beats Paper!";
    }
  }
  return ans;
}

function game(){
  let playerPoint = 0;
  let compPoint = 0;
  let result;
  let score;
  // for(let x=0; x<5; x++){
  //   let entry = prompt("Enter your move!").trim();
  //   while(checkEntryWrong(entry)){
  //     entry = prompt("That wasn't a valid move, try again!");
  //   }
  //   result = playRound(entry, computerPlay());
  //   console.log("Round "+(x+1)+": "+result);
  //   if(result.includes("lose")){
  //     compPoint++;
  //   }
  //   else if(result.includes("win")){
  //     playerPoint++;
  //   }
  // }
  if(playerPoint==compPoint){
    score = "Tie Game!";
  }
  else if(playerPoint>compPoint){
    score = "You win!";
  }
  else{
    score = "You lose!";
  }
  console.log(`Final Score:
  You: ${playerPoint}
  Computer: ${compPoint}
  ${score}`);
}

function checkEntryWrong(input){
  if(input!=null){
    let eval = input.toLowerCase();
    if(eval=="rock"||eval=="scissors"||eval=="paper"){
      return false;
    }
  }
  return true;
}
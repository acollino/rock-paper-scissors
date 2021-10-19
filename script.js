let roundCounter = 0;
let playerPoint = 0;
let compPoint = 0;
let score = "";
const results = document.querySelector("#Rounds");
const playerScore = document.querySelector("#Player");
const compScore = document.querySelector("#Computer");
const finalBox = document.querySelector("#Results");

const buttons = document.querySelectorAll("button");
buttons.forEach(function(item){
  item.addEventListener("click", function(e){
    playRound(item.id);
  });
});

function computerPlay(){
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random()*options.length)];
}

function resetGame(){
  roundCounter=1;
  playerScore.textContent = playerPoint = 0;
  compScore.textContent = compPoint = 0;
  finalBox.textContent = "";
}

function endGame(playpoints, compPoints){
  if(playpoints==compPoints){
    return "Tie Game!";
  }
  else if(playpoints>compPoints){
    return "You win!";
  }
  return "You lose!";
}

function playRound(playerSelection){
  (roundCounter >= 5)? resetGame() : roundCounter++;
  let computerSelection = computerPlay();
  ans = "You chose "+playerSelection+" and the computer chose "+computerSelection+ "!";
  if(playerSelection == computerSelection){
    ans = "It's a draw!\nYou both chose "+computerSelection+", so no points this round!";
  }
  else if((playerSelection == "Rock"&&computerSelection == "Scissors")||(playerSelection == "Paper"&&computerSelection == "Rock")||(playerSelection == "Scissors"&&computerSelection == "Paper")){
    ans = "You win the round!\n"+ans;
    playerScore.textContent = ++playerPoint;
  }
  else{
    ans = "The computer wins the round!\n"+ans;
    compScore.textContent = ++compPoint;
  }
  if(roundCounter > 1){
    results.textContent += "\n"+`Round ${roundCounter}: ${ans}` +"\n";
  }
  else{
    results.textContent = `Round ${roundCounter}: ${ans}`+"\n";
  }
  if(roundCounter==5){
    score = endGame(playerPoint, compPoint);
    finalBox.textContent = "Final Results:\n"+
    `You: ${playerPoint}, Computer: ${compPoint}`+"\n"+score;
  }
}
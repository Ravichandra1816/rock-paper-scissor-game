let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");

const genCompchoice = () =>{
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() *3);
  return options[randIdx];
};

const showWinner = (userWin, userChoise, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText= `You win! your choice was ${userChoise} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost your choice was ${compChoice} you beats ${userChoise}`;
    msg.style.backgroundColor = "orange" ;
  }
};

const gameDraw = () => {
  drawScore++;
  drawScorePara.innerText = drawScore;
  msg.innerText = "Game was Draw. Play again!";
  msg.style.backgroundColor =  "red";
};

const playGame = (userChoice) => {
 const compChoice = genCompchoice();
 if(userChoice === compChoice){
  gameDraw();
 } else{
  let userWin = true;
  if(userChoice === "rock"){
   userWin = compChoice === "paper" ? false : true; 
  } else if(userChoice === "paper"){
    userWin = compChoice === "scissors" ? false : true;
  } else{
    userWin = compChoice ==="rock" ? false : true;
  }
  showWinner(userWin, userChoice, compChoice);
 }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
  

console.log("hello")

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".mypara");


const gencompchoice=()=>{
  //rock paper scisssors
  const optioins=["rock","paper","scissors"]
  const randIdax=Math.floor(Math.random() *3);
  return optioins[randIdax];
}

const showWinner=(userWin,userchoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorepara.innerText= userScore;
    msg.innerText=`you win!,your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    msg.style.color="white";
  }else{
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText=`you lose!, ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
    msg.style.color="white";
  }

};

const drawGame=()=>{
  msg.innerText="Game was draw,Play Again";
  msg.style.backgroundColor="yellow";
  msg.style.color="black";
}

const playGame=(userchoice)=>{
  //user choice
 
  //generator choice
  const compChoice=gencompchoice();
  

  if(userchoice===compChoice){
    //draw game
    drawGame();
  }else {
   let userWin=true;
   if(userchoice==="rock"){
    //scissors,paper
    userWin=compChoice==="paper"? false:true;
   }else if(userchoice==="paper"){
    //scissors,rock
    userWin=compChoice==="scissors"? false:true;
   }else{//rock,paper
    userWin=compChoice==="rock"? false:true;
   }
   showWinner(userWin,userchoice,compChoice);

  }

};

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");



choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
  });
});
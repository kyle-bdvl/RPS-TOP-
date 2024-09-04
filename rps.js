console.log("Rock Paper Scissors The Game")
const p = "PAPER", r = "ROCK", s="SCISSORS";

function getComputerChoice(){ 
    let random = Math.floor(Math.random()*3);
    if (random === 0){
        return p;
    }
    else if (random ===1){
        return r;
    }
    else {
        return s;
    }

}

//gets the human Choice via prompt 
function getHumanChoice(){
    let humanChoice = window.prompt("Enter Rock, Paper or Scissors");
    humanChoice = humanChoice.toLocaleUpperCase();
    if (humanChoice===r||humanChoice===p||humanChoice===s){
        return humanChoice;
    }
    else {
        alert("Please Enter the correct input");
        return getHumanChoice();
    }
}

var humanScore =0, ComputerScore=0; //initialized to zero for both 

//writting logic to play a single round 
function playRound(HC,CC){
    if ((HC ===s && CC === p ) ||(HC ===r && CC === s)||(HC=== p && CC === r))
        humanScore+=1;
    else if (HC === CC){
        alert("tie");
    }
    else{ 
        ComputerScore= ComputerScore +1;
    }
    //global score
    console.log("Human Score :"+humanScore);
    console.log("Computer Score :"+ComputerScore);

}

function playGame (HC,CC){
    
    while (humanScore<5 && ComputerScore<5){
        let CC= getComputerChoice();
        let HC = getHumanChoice();
        playRound(HC,CC);
        alert ("computer played "+CC+ "\nHuman Played "+ HC);
       
    }
}

function checkWinner (humanScore, ComputerScore){
    if (humanScore> ComputerScore){
        alert("human wins!");
    }
    else if (humanScore< ComputerScore)
        alert("Computer wins");
}


playGame();
checkWinner(humanScore,ComputerScore);
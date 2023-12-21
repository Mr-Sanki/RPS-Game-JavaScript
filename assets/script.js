const selections=["rock", "paper", "scissor"];
let playerScore=0;
let computerScore=0;
let roundCounter=0;
const maxRound=5;
//DOM
const playerScore_div = document.getElementById('player-score');
const computerScore_div= document.getElementById('computer-score');
const message_div = document.getElementById('message');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissor_btn = document.getElementById('scissor');


//Computer choices function
function getComputerChoice(){
    return selections[Math.floor(Math.random() * 3)] ;
}
//win
function win(playerSelection, computerSelection) {
    playerScore++;
    updateScores(playerScore, computerScore);
    message_div.innerHTML=`"${playerSelection} beats ${computerSelection}"`;
}
//lost
function lost(playerSelection, computerSelection) {
    computerScore++;
    updateScores(playerScore, computerScore);
    message_div.innerHTML=`"${playerSelection} beated by ${computerSelection}"`;
}
//draw
function draw(playerSelection, computerSelection) {
    updateScores(playerScore, computerScore);
    message_div.innerHTML=`"${playerSelection} equal to ${computerSelection}"`;
}
//winner function
function winner(playerScore,computerScore) {
    if (playerScore>computerScore) {
        return `Player Win THE GAME!!`
    } else if(playerScore<computerScore){
        return `PLayer Lost THE GAME..`
    }else{
        return `It's a DRAWWW`;
    }
}
//game round function
function gameRound(playerSelection, computerSelection) {
    
    
    if (roundCounter <maxRound){
        //----------
            if(     playerSelection == 'rock' && computerSelection == 'scissor'
            || playerSelection == 'paper' && computerSelection == 'rock'
            || playerSelection == 'scissor' && computerSelection == 'paper' ){
                win(playerSelection, computerSelection);

            }else if(computerSelection== 'rock' && playerSelection =='scissor'
                ||computerSelection== 'paper' && playerSelection == 'rock'
                ||computerSelection== 'scissor' && playerSelection == 'paper'){
                lost(playerSelection,computerSelection);
            }else{
                draw(playerSelection, computerSelection);
            }   
        //-----------
    }
    roundCounter++;
   if (roundCounter>=maxRound){
        message_div.innerHTML=`
        <fieldset class="field">
            <legend class ="shadow" style=" color: var(--red);">
                GAME OVER
            </legend>
            ${winner(playerScore, computerScore)} 
            <button id="reset" class="reset-btn">Reset</button>
        </fieldset>`;
        const reset_btn = document.getElementById('reset');
        reset_btn.classList.add('reset-btn');
        reset_btn.addEventListener('click', ()=>location.reload());

        

   }  
      
    
}

//main game click to start game round
function game() {
    rock_btn.addEventListener('click',()=>{gameRound('rock',getComputerChoice())});
    paper_btn.addEventListener('click',()=>{gameRound('paper',getComputerChoice())});
    scissor_btn.addEventListener('click',()=>{gameRound('scissor',getComputerChoice())});
}

function updateScores(playerScore, computerScore) {
    playerScore_div.innerHTML= playerScore;
    computerScore_div.innerHTML= computerScore;
}



game();
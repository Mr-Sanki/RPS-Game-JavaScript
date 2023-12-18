const selections=["rock", "paper", "scissor"];

function getComputerChoice(){
    return selections[Math.floor(Math.random() * 3)] ;
}




function playRound(){
    var playerInput= document.getElementById('player-selection').value;
    var cpuOutput = document.getElementById('computer-selection');
    cpuOutput.textContent=getComputerChoice();
    var message= document.getElementById('message');
    if (playerInput == cpuOutput.textContent) {
        message.textContent="draw";
    } else {
        if((playerInput=="rock" && cpuOutput.textContent=="scissor") || (playerInput == "scissor" && cpuOutput.textContent == "rock") || (playerInput == "paper" && cpuOutput.textContent == "rock") ){
            message.textContent="You WON!!";
        }else{
            message.textContent="You LOSE!! Computer WON";
        }
    }
    
}
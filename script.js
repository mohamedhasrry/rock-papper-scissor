const choiceBtns = document.querySelectorAll(".choice-btn");

const playerChoiceText = document.querySelector('.player-choice-text');
const cpuChoiceText = document.querySelector(".cpu-choice-text");
const gameTitle = document.querySelector(".game-title");

const scoreWonText = document.querySelector(".score-won-test");
const scoreDrawText = document.querySelector(".score-draw-test");
const scoreLostText = document.querySelector(".score-lost-text"); // Corrected class name



let playerResultValue= "";
let cpuResultValue ="";

const choiceEmoji = {
    rock :"✊",
    paper:"✋",
    scissors: "✌️"
}

/*choiceBtns.forEach(btn => btn.style.pointerEvents = "visible")*/
choiceBtns.forEach((choiceBtn) => {
    choiceBtn.addEventListener("click", () => {


        gameTitle.textContent = "Let's Play!"

        playerChoiceText.textContent = "✊"
        cpuChoiceText.textContent = "✊"

        playerResultValue = choiceBtn.value.toLowerCase();
        cpuResultValue = getCupResultValue()
        
        playerChoiceText.classList.add("player-choice-text-anim")
        cpuChoiceText.classList.add("cpu-choice-text-anim")

        setTimeout(() => {
            playerChoiceText.textContent = choiceEmoji[playerResultValue]
            cpuChoiceText.textContent = choiceEmoji[cpuResultValue]
            
            playerChoiceText.classList.remove("player-choice-text-anim")
            cpuChoiceText.classList.remove("cpu-choice-text-anim")
            showResultGame()

            choiceBtns.forEach(btn => {
            btn.style.pointerEvents = "visible"
            })
        }, 2000)

        
    })
})

function getCupResultValue(){
    const cpuoptionchoices = ["rock", "paper", "scissors"]
    
    const cpuRandomChoices = cpuoptionchoices[Math.floor(Math.random() * cpuoptionchoices.length)]
    return cpuRandomChoices
}

function showResultGame() {
    if (playerResultValue == cpuResultValue){
         gameTitle.textContent = "Draw!"
         scoreDrawText.textContent = parseInt(scoreDrawText.textContent) + 1;
    } else if(
        playerResultValue == "rock" &&
        cpuResultValue == "scissors"
        ||
        playerResultValue == "paper" &&
        cpuResultValue == "rock"
        ||
        playerResultValue == "scissors" &&
        cpuResultValue == "paper"
    ){
        gameTitle.textContent = "you won!"
        scoreWonText.textContent = parseInt(scoreWonText.textContent) + 1;
    } else {
        gameTitle.textContent = "you LOST :("
        scoreLostText.textContent = parseInt(scoreLostText.textContent) + 1;
    }
}
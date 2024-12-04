const rulesWindow = document.querySelector(`.rulesModal`);
function openRulesWindow() {rulesWindow.classList.add('open')};
function closeRulesWindow() {rulesWindow.classList.remove('open')};


const choiceWindow = document.querySelector(`.gameBody`);
const stepsWindow = document.querySelector(`.step`);
const resultWindow = document.querySelector(`.result`);
const total = document.querySelector(`.total`);
const resultWindow_h2 = document.querySelector(`.result h2`);
const stepsWindow_player = document.querySelector(`.playerStep .conter`);
const stepsWindow_house = document.querySelector(`.houseStep .conter`);
let playerChoice;
let computerChoice;
let totalScore = 0;
function computerChoiceMethod() {
    const choices = ['rock', 'paper','scissors', 'lizard', 'spock'];
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    choiceWindow.style.display = 'none';
    stepsWindow.style.display = 'flex';
    stepsWindow_player.innerHTML += `<img src="./images/icon-${playerChoice}.svg" alt="player choice">`
    stepsWindow_player.style = `background-color: white;
            border: 30px solid var(--${playerChoice}-Gradient);`
    
    setTimeout(()=>{
        stepsWindow_house.innerHTML += `<img src="./images/icon-${computerChoice}.svg" alt="computer choice">`
        stepsWindow_house.style = `background-color: white;
            border: 30px solid var(--${computerChoice}-Gradient);`
    }, 3000);

    setTimeout(()=>{
        let result;
        if (playerChoice == computerChoice) {
            result = 'DRAW';
        }else{
            if (testChoice()) {
                result = 'LOSE';
            } else {
                result = 'WIN';
                totalScore++;
            }
        }
        resultWindow_h2.innerHTML += `YOU ${result}!`;
        resultWindow.style.display = 'flex';
        total.innerHTML = `${totalScore}`;
    }, 4000);
};

function Choice(choice){
    playerChoice = choice.classList.value;
    computerChoiceMethod();
    setTimeout(playRound(), 1000);
}

function playAgain(){
    choiceWindow.style.display = 'flex';
    stepsWindow.style.display = 'none';
    resultWindow.style.display = 'none';
    stepsWindow_player.innerHTML = '';
    stepsWindow_house.innerHTML = '';
    resultWindow_h2.innerHTML = '';
    stepsWindow_house.style = `background-color: rgba(0, 0, 0, 0.24);
            border: none;`
}

function testChoice(){
        if (playerChoice == 'paper') {
            if (computerChoice == 'scissors' || computerChoice == 'lizard') {
                return true;
            } else {
                return false;
            }
        } else if (playerChoice == 'rock') {
            if (computerChoice == 'paper' || computerChoice == 'spock') {
                return true;
            } else {
                return false;
            }
        } else if (playerChoice == 'lizard') {
            if (computerChoice == 'rock' || computerChoice == 'scissors') {
                return true;
            } else {
                return false;
            }
        } else if (playerChoice == 'spock') {
            if (computerChoice == 'lizard' || computerChoice == 'paper') {
                return true;
            } else {
                return false;
            }
        } else if (playerChoice == 'scissors') {
            if (computerChoice == 'spock' || computerChoice == 'rock') {
                return true;
            } else {
                return false;
            }
        }
}
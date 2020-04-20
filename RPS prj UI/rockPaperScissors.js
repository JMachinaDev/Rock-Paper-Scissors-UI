const score = document.getElementById('score');
const scoreBoard = {
    player: 0,
    computer: 0
};


// Computer Choice
function getComputerChoice () {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0){
        return 'rock';
    } else if(computer === 1){
        return 'paper';
    } else if(computer ===  2){
        return 'scissors';
    } else {
        return 'error';
    }
};


//  Decide Winner Function
function getWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'tied';
    };
    if(playerChoice  === 'rock'){
        if(computerChoice === 'scissors'){
            return 'won';
        } else {
            return 'lost';
        };
    } else if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            return 'won';
        } else  {
            return 'lost';
        }
    } else if(playerChoice ===  'scissors'){
        if(computerChoice === 'paper'){
            return  'won';
        } else {
            return 'lost';
        };
    };
};


// Display winner  Function
function displayWinner(winner,computerChoice){
    if(winner === 'won'){
        scoreBoard.player++;
        document.getElementById('display').innerHTML = `You  WON, Computer Chose: <br> ${computerChoice}`;
    } else if(winner === 'lost'){
        scoreBoard.computer++;
        document.getElementById('display').innerHTML = `You  LOST, Computer Chose: <br> ${computerChoice}`;
    } else if(winner === 'tied'){
        document.getElementById('display').innerHTML = 'You  tied';
    }
    if(scoreBoard.player >= 6){
        restartGame();
    }else if(scoreBoard.computer >= 6){
        restartGame();
    }
score.innerHTML = `
<p>Player Score: ${scoreBoard.player}</p>
<p>Computer Score: ${scoreBoard.computer}</p>`;
};


// restrt game function, call when event 'click'
function restartGame(e){
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    document.getElementById('display').innerHTML = '';
    score.innerHTML = `
<p>Player Score: 0</p>
<p>Computer Score: 0</p>`;
}

// Play game function
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    displayWinner(winner, computerChoice);
    console.log(playerChoice, computerChoice, winner);
};

const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('click', play));
const restart = document.getElementById('restart');
restart.addEventListener('click', restartGame);



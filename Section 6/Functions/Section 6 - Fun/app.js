const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'Draw';
const  RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';



let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice! We choose ${DEFAULT_USER_CHOICE} for you!`)
        return;
    }
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

//Arrow functions shorten amount of code needed.
// const add = (a, b) => a + b;
// const add2 = function(a, b) {
//     return a+b;
// }

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE)  => 
     cChoice === pChoice ? RESULT_DRAW : (cChoice === ROCK && pChoice === PAPER)
     || (cChoice === PAPER && pChoice === SCISSORS)
     || (cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;
    // if (cChoice === pChoice) {
    //     return RESULT_DRAW
    // } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
    //     return RESULT_PLAYER_WINS
    // } else {
    //     RESULT_COMPUTER_WINS;
    // }



startGameBtn.addEventListener('click', function startGame(){
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice(); //might be undefined
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice);
    } else {
        winner = getWinner(computerChoice, playerChoice);
    }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

//not related to the game
const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    resultHandler(sum);
}

const subractUp = function() {
    let sum = 0;
    for (const num of arguments) { //don't use that, use the rest operator
        sum -= num;
    }
    return sum;
};

const showResult = (result) => {
    alert('The result after adding all numbers is: ' + result)
};

console.log(sumUp([showResult, 1, 5, 'fdsa', -3, 6, 10]));
console.log(sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 10, 15, 20));
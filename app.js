import { getRandomThrow } from './get-random-throw.js';
import { didUserWin } from './utils.js';

// import functions and grab DOM elements
const inputButton = document.querySelector('#user-throw');
const resultDisplay = document.querySelector('#result');
const winsDisplayTotal = document.querySelector('.wins-total');
const drawsDisplayTotal = document.querySelector('.draws-total');
const lossesDisplayTotal = document.querySelector('.losses-total');
const winsDisplay = document.querySelector('.wins');
const drawsDisplay = document.querySelector('.draws');
const lossesDisplay = document.querySelector('.losses');
const resetButton = document.querySelector('#reset');

// initialize state
let win = 0;
let draw = 0;
let lose = 0;

// set event listeners to update state and DOM
inputButton.addEventListener ('click', () => {
    //grab user + CPU throws and store them in variables
    const input = document.querySelector('input[type=radio]:checked');
    let userThrow = input.value;
    let computerThrow = getRandomThrow();

    //compare values to determine winner
    let evalUserWin = didUserWin(userThrow, computerThrow);

    //change state
    if (evalUserWin === 'draw') {
        draw++;
        resultDisplay.textContent = 'IT\'S A ✎d r a w';
    } else if (evalUserWin === 'win') {
        win++;
        resultDisplay.textContent = '﹡ ❃ ✺ YOU WIN! ✸ ❂ ✧';
    } else {
        lose++;
        resultDisplay.textContent = 'YOU LOSE :('; 
    }

    //update DOM
    winsDisplayTotal.textContent = win;
    drawsDisplayTotal.textContent = draw;
    lossesDisplayTotal.textContent = lose;

});

resetButton.addEventListener ('click', () => {
    //reset class on results div
    resultDisplay.textContent = 'R O C K  ///  P A P E R  ///  S C I S S O R S';
    
    //reset score variables
    win = 0;
    draw = 0;
    lose = 0;

    //reset score display
    winsDisplayTotal.textContent = 0;
    drawsDisplayTotal.textContent = 0;
    lossesDisplayTotal.textContent = 0;

});
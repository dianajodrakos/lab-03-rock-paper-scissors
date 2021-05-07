import { getRandomThrow } from './get-random-throw.js';
import { didUserWin, calcLeadingTotal } from './utils.js';

// import functions and grab DOM elements
const inputButton = document.querySelector('#user-throw');
const resultDisplay = document.querySelector('#result');
const winDisplayTotal = document.querySelector('.wins-total');
const drawDisplayTotal = document.querySelector('.draws-total');
const lossDisplayTotal = document.querySelector('.losses-total');
const winDisplay = document.querySelector('.win');
const drawDisplay = document.querySelector('.draw');
const loseDisplay = document.querySelector('.lose');
const resetDisplay = document.querySelector('.reset');
const resetButton = document.querySelector('#reset-button');

// initialize state
let win = 0;
let draw = 0;
let lose = 0;

// set event listeners to update state and DOM
inputButton.addEventListener ('click', () => {
    winDisplay.classList.remove('leading-total');
    drawDisplay.classList.remove('leading-total');
    loseDisplay.classList.remove('leading-total');
    
    //grab user + CPU throws and store them in variables
    const input = document.querySelector('input[type=radio]:checked');

    //if no input is checked, alert user
    if (input === null) {
        return alert('Choose your weapon!');
    }

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
    
    //update DOM with score totals
    winDisplayTotal.textContent = win;
    drawDisplayTotal.textContent = draw;
    lossDisplayTotal.textContent = lose;
    
    //highlight new leading total
    let leadingTotal = calcLeadingTotal(win, draw, lose);
    let leadingTotalDisplay = document.querySelector(`.${leadingTotal}`);
    leadingTotalDisplay.classList.add('leading-total');
    console.log(leadingTotal, leadingTotalDisplay);

});

resetButton.addEventListener ('click', () => {
    //reset class on results div
    resultDisplay.textContent = 'R O C K  ///  P A P E R  ///  S C I S S O R S';

    //reset score variables
    win = 0;
    draw = 0;
    lose = 0;

    //reset score display
    winDisplayTotal.textContent = 0;
    drawDisplayTotal.textContent = 0;
    lossDisplayTotal.textContent = 0;

});
import { getRandomThrow } from './get-random-throw.js';

// import functions and grab DOM elements
const inputButton = document.querySelector('#user-throw');
const resultDisplay = document.querySelector('#results');
const resetButton = document.querySelector('#reset');

// initialize state
let rounds = 0;
let wins = 0;

// set event listeners to update state and DOM
inputButton.addEventListener ('click', () => {
    //grab user + CPU throws and store them in variables
    const input = document.querySelector('input[type=radio]:checked');
    let userThrow = input.value;
    let computerThrow = getRandomThrow();

    console.log(computerThrow);
    console.log(userThrow);

    //compare values to determine winner
    let userWin = didUserWin(userThrow, computerThrow);

});
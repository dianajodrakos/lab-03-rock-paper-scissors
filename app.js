import { countAsAYes, countAsANo, countSpacewalk } from './utils.js';

// import functions and grab DOM elements
const inputButton = document.querySelector('#user-throw');
const resultDisplay = document.querySelector('#results');
const resetButton = document.querySelector('#reset');

// initialize state
let rounds = 0;
let wins = 0;

// set event listeners to update state and DOM

inputButton.addEventListener ('click', () => {
    const input = document.querySelector('input[type=radio]:checked');
    let userThrow = input.value;
    console.log('this button is working!');
    console.log('input.value = ' + input.value + ', userThrow = ' + userThrow);

});
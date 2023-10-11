const outputDisplay = document.querySelector('.js-output');
const numberButton = document.querySelector('.js-button-number');
const divButtonGrid = document.querySelector('.js-button-grid');
const clearButton = document.querySelector('.js-clear-button');
const calculateCheck = toggleTerm ? tempTerm = baseTerm : calculateValues(baseTerm, augmentTerm);

let operation = '';
let toggleTerm = true;
let tempTerm = '';

divButtonGrid.addEventListener('click', (event) => {
  const clickedButton = event.target;

  if (!clickedButton.classList.contains('js-button-number')) {
    return;
  };
  tempTerm += clickedButton.innerHTML;
  outputDisplay.innerHTML = tempTerm;
});

clearButton.addEventListener('click', () => outputDisplay.innerHTML = '');

function addition() {
  toggleTerm = false;
  operation = 'add';
  calculateCheck;  
}

function subtract() {
  toggleTerm = false;
  operation = 'subtract';
  calculateCheck;  
}

function multiplication() {
  toggleTerm = false;
  operation = 'multiply';
  calculateCheck;  
}

function devide() {
  toggleTerm = false;
  operation = 'devide';
  calculateCheck;  
}

function calculateValues()
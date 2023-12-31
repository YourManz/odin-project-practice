const outputDisplay = document.querySelector('.js-output');
const numberButton = document.querySelector('.js-button-number');
const divButtonGrid = document.querySelector('.js-button-grid');
const clearButton = document.querySelector('.js-clear-button');
const decimalButton = document.querySelector('.js-button-decimal');

let operation = '';
let toggleTerm = true;
let tempTerm = '';
let baseTerm = '';
let augmentTerm = '';
let hasDecimal = false;

divButtonGrid.addEventListener('click', (event) => {
  const clickedButton = event.target;
  if (!clickedButton.classList.contains('js-button-number')) {
    return;
  };  //these lines are just to issolate the right button class clicks

  tempTerm += clickedButton.innerHTML;
  outputDisplay.innerHTML = tempTerm;
});

divButtonGrid.addEventListener('click', (event) => {
  const button = event.target
  if (!button.classList.contains('js-button-operation')) {
    return;
  };  //these lines are just to issolate the right button class clicks

  toggleTerm = false;
  if (baseTerm === '') {
    baseTerm = tempTerm;
  } else {
    augmentTerm = tempTerm;
  };
  tempTerm = '';
  outputDisplay.innerHTML = tempTerm;
  hasDecimal = false;
  
  console.log(baseTerm);
  console.log(augmentTerm);

  if (button.innerHTML === '+') {
    operation = 'add';
  }  else if (button.innerHTML === '-') {
    operation = 'subtract';
  } else if (button.innerHTML === '*') {
    operation = 'multiply';
  } else if (button.innerHTML === '/') {
    operation = 'devide';
  }
});

divButtonGrid.addEventListener('click', (event) => {
  const button = event.target
  if (!button.classList.contains('js-button-equals')) {
    return;
  }  //these lines are just to issolate the right button class clicks

  augmentTerm = outputDisplay.innerHTML;
  console.log(baseTerm);
  console.log(augmentTerm);
  if (baseTerm === '' || augmentTerm === '') {
    return;
  };
  calculateValues(Number(baseTerm), Number(augmentTerm));
});

clearButton.addEventListener('click', () => {
  clearInput()
});

decimalButton.addEventListener('click', (event) => {
  const button = event.target
  if (hasDecimal) {
    return;
  };
  hasDecimal = (!hasDecimal);
  tempTerm += '.';
  outputDisplay.innerHTML = tempTerm;
});

function clearInput() {
  outputDisplay.innerHTML = '';
  tempTerm = '';
  baseTerm = '';
  augmentTerm = '';
  hasDecimal = false;
};

function equal() {
  if (toggleTerm) {
    return;
  }
  augmentTerm = tempTerm
  calculateValues(Number(baseTerm), Number(augmentTerm))
};

function calculateValues(base, augment) {
  
  if (operation === 'add') {
    base += augment;
  } else if (operation === 'subtract') {
    base -= augment;
  } else if (operation === 'multiply') {
    base = base * augment;
  } else if (operation === 'devide') {
    base = base / augment;
  };
    clearInput();
    outputDisplay.innerHTML = base;
};
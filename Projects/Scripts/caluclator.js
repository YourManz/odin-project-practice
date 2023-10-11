const outputDisplay = document.querySelector('.js-output');
const numberButton = document.querySelector('.js-button-number');
const divButtonGrid = document.querySelector('.js-button-grid');
const clearButton = document.querySelector('.js-clear-button');

let operation = '';
let toggleTerm = true;
let tempTerm = '';
let baseTerm = '';
let augmentTerm = '';
const calculateCheck = toggleTerm ? tempTerm = baseTerm : calculateValues(Number(baseTerm), Number(augmentTerm));

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
  calculateCheck;
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
  calculateValues(Number(baseTerm), Number(augmentTerm));
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
})

clearButton.addEventListener('click', () => {
  clearInput()
});

function clearInput() {
  outputDisplay.innerHTML = '';
  tempTerm = '';
  baseTerm = '';
  augmentTerm = '';
}

function equal() {
  if (toggleTerm) {
    return;
  }
  tempTerm = augmentTerm
  calculateValues(Number(baseTerm), Number(augmentTerm))
}

function calculateValues(base, augment) {
  
  if (operation === 'add') {
    base += augment;
    console.log('test')
  } else if (operation === 'subtract') {
    base -= augment;
    console.log('test')
  } else if (operation === 'multiply') {
    base = base * augment;
    console.log('test')
  } else if (operation === 'devide') {
    base = base / augment;
    console.log('test')
  };
    clearInput()
    outputDisplay.innerHTML = base;
}
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
  };

  tempTerm += clickedButton.innerHTML;
  outputDisplay.innerHTML = tempTerm;
});

divButtonGrid.addEventListener('click', (event) => {
  const button = event.target
  if (!button.classList.contains('js-button-operation')) {
    return;
  };

  toggleTerm = false;
  baseTerm = tempTerm;
  tempTerm = '';
  outputDisplay.innerHTML = tempTerm;
  calculateCheck;
  console.log(baseTerm);


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
  }
  if (!baseTerm === '' && !augmentTerm === '') {
    calculateValues(Number(baseTerm), Number(augmentTerm))
    console.log('equals check')
  }
})

clearButton.addEventListener('click', () => {
  outputDisplay.innerHTML = '';
  tempTerm = '';
});

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
  } else if (operation === 'subtract') {
    base -= augment;
  } else if (operation === 'multiply') {
    base = base * augment;
  } else if (operation === 'devide') {
    base = base / augment;
  };
  console.log(base);
}
let toggled = {
  addition:false,
  subtraction:false,
  multiplication:false,
  devision:false
};
const categories = ['addition', 'subtraction', 'multiplication', 'devision'];

divButtonGrid.addEventListener('click', (event) => {
  const button = event.target
  if (!button.classList.contains('js-button-operation')) {
    return;
  };  //these lines are just to issolate the right button class clicks
  
  if (button.innerHTML === '+') {
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.addition = true;
    button.classList.add('toggled-button');
  }  else if (button.innerHTML === '-') {
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.subtraction = true;
    button.classList.add('toggled-button');
  } else if (button.innerHTML === '*') {
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.multiplication = true;
    button.classList.add('toggled-button');
  } else if (button.innerHTML === '/') {
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.devision = true;
    button.classList.add('toggled-button');
  };

  for (i = 0; i<categories.length; i++) {
    if (toggled[categories[i]] === false) {
      button.classList.remove('toggled-button');
    } else if (toggled[categories[i]] === true) {
      button.classList.add('toggled-button');
    };
  };
});

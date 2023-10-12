let toggled = {
  addition:false,
  subtraction:false,
  multiplication:false,
  devision:false
};
const categories = ['addition', 'subtraction', 'multiplication', 'devision'];

console.log(categories.length)

divButtonGrid.addEventListener('click', (event) => {
  const button = event.target
  if (!button.classList.contains('js-button-operation')) {
    return;
  };  //these lines are just to issolate the right button class clicks
  

  if (button.innerHTML === '+') {    
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.addition = true;
  }  else if (button.innerHTML === '-') {    
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.subtraction = true;
  } else if (button.innerHTML === '*') {    
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.multiplication = true;
  } else if (button.innerHTML === '/') {    
    toggled = {addition:false, subtraction:false, multiplication:false, devision:false};
    toggled.devision = true;
  };

  categories.forEach((value, index) => {
    if (toggled[categories[index]] === false) {
      console.log(`is false ${index}`);
      console.log(value);
      button.classList.remove('toggled-button');
    } else if (toggled[categories[index]] === true) {
      console.log(`is true${index}`);
      console.log(value);
      button.classList.add('toggled-button');
    };
  });
});

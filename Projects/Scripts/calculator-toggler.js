const toggled = {
  addition:false,
  subtraction:false,
  multiplication:false,
  devision:false
};
const categories = ['gaming', 'music', 'tech'];

divButtonGrid.addEventListener('click', (event) => {
  const button = event.target
  if (!button.classList.contains('js-button-operation')) {
    return;
  };  //these lines are just to issolate the right button class clicks
  
  if (button.innerHTML === '+') {
    toggled.addition = true;
    
  }  else if (button.innerHTML === '-') {
    toggled.subtraction = true;

  } else if (button.innerHTML === '*') {
    toggled.multiplication = true;

  } else if (button.innerHTML === '/') {
    toggled.devision = true;

  };
});

function toggleButton(a) {
  const buttonClass = document.querySelector(`.js-button-operation`);
  //document.querySelector('.category-button').classList.remove('toggled-button');
  toggled[a] = (!toggled[a]);
  
  if (toggled[a] === true) {
    buttonClass.classList.add('toggled-button');
  } else {
    buttonClass.classList.remove('toggled-button');
  }
toggledCheck(a);
};

function toggledCheck(a) {
  if (a === 'gaming') {
    document.querySelector(`.js-gaming-button`).classList.add('toggled-button');
    toggled.music = false;
    toggled.tech = false;
    localStorage.setItem('toggled', JSON.stringify(toggled));
    loopThrough();
  };
  if (a === 'music') {
    document.querySelector(`.js-music-button`).classList.add('toggled-button');
    toggled.gaming = false;
    toggled.tech = false;
    localStorage.setItem('toggled', JSON.stringify(toggled));
    loopThrough();
  };
  if (a === 'tech') {
    document.querySelector(`.js-tech-button`).classList.add('toggled-button');
    toggled.gaming = false;
    toggled.music = false;
    localStorage.setItem('toggled', JSON.stringify(toggled));
    loopThrough();
  };
};

function loopThrough() {
  for (i = 0; i<categories.length; i++) {
    const buttonClass = document.querySelector(`.js-${categories[i]}-button`);
    if (toggled[categories[i]] === false) {
      buttonClass.classList.remove('toggled-button');
    } else if (toggled[categories[i]] === true) {
      buttonClass.classList.add('toggled-button');
    };
  };
};
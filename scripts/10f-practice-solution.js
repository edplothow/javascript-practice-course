function toggleButton (buttonType) {
  

  const buttonToBeChanged = document.querySelector(buttonType);
  if (buttonToBeChanged.classList.contains('grey-button')) {

    turnOffPreviousButton();
    buttonToBeChanged.classList.add('black-button');
    buttonToBeChanged.classList.remove('grey-button');
    
    
  } else {
    
    buttonToBeChanged.classList.add('grey-button');
    buttonToBeChanged.classList.remove('black-button');
  }
  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.black-button');
    if (previousButton) {
      previousButton.classList.remove('black-button');
      previousButton.classList.add('grey-button');
    }
  }
}
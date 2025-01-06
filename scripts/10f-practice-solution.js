function toggleButton (buttonType) {
  console.log("bilboBaggins");

  const buttonToBeChanged = document.querySelector(buttonType);
  if (buttonToBeChanged.classList.contains('toggle-button')) {
    console.log('FrodoBaggins');
    buttonToBeChanged.classList.add('is-toggled');
    buttonToBeChanged.classList.remove('toggle-button');
    
  } else {
    console.log('gandalf the grey');
    buttonToBeChanged.classList.add('toggle-button');
    buttonToBeChanged.classList.remove('is-toggled');
  }
}
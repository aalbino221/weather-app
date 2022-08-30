function changeAllUnits() {
  const currentUnit = document.querySelector('#change-mode');
  const temp = document.querySelector('.temp');
  const tempNumber = Number(temp.dataset.tempcelsius);
  const feelsLike = document.querySelector('.extra-temp');
  const feelsNumber = Number(feelsLike.dataset.feelscelsius);
  if (currentUnit.textContent === 'Fº') {
    temp.textContent = `${(tempNumber * 1.8 + 32).toFixed(1)}º`;
    feelsLike.textContent = `Feels like: ${(feelsNumber * 1.8 + 32).toFixed(
      1,
    )}º`;
  } else {
    temp.textContent = `${tempNumber.toFixed(1)}º`;
    feelsLike.textContent = `Feels like: ${feelsNumber.toFixed(1)}º`;
  }
}

function changeSelectedUnit() {
  const currentUnit = document.querySelector('#change-mode');
  if (currentUnit.textContent === 'Cº') {
    currentUnit.textContent = 'Fº';
  } else {
    currentUnit.textContent = 'Cº';
  }
  changeAllUnits();
}

function changeUnitListener() {
  const currentUnitSelected = document.querySelector('#change-mode');
  currentUnitSelected.addEventListener('click', changeSelectedUnit);
}

export { changeUnitListener, changeAllUnits };

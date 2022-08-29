import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { changeUnitListener } from './functions';
import { changeCity } from './dom';

function init() {
  const searchBtn = document.querySelector('#search-city');
  changeUnitListener();
  searchBtn.addEventListener('click', changeCity);
}

init();

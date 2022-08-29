import { changeAllUnits } from './functions';

async function getData() {
  const error = document.querySelector('#error');
  error.textContent = '';
  try {
    const input = document.querySelector('#input-city').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7743c6ee0dd84aad18ab65766c7fa288&units=metric`);
    const data = await response.json();
    if (data.message) {
      error.textContent = data.message;
    }
    return data;
  } catch (ex) {
    error.textContent = 'Location not found';
    return ('outer', ex.message);
  }
}

function changeClouds(data) {
  const clouds = document.querySelector('.clouds-now');
  const img = document.querySelector('#icon');
  clouds.textContent = `${data.weather[0].description[0].toUpperCase()}${data.weather[0].description.slice(1)}`;
  img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

async function changeCity() {
  const data = await getData();
  const cityName = document.querySelector('.city-name');
  const temp = document.querySelector('.temp');
  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temp.textContent = `${Number(data.main.temp).toFixed(1)}º`;
  temp.dataset.tempcelsius = data.main.temp;
  const feelsLike = document.querySelector('.extra-temp');
  feelsLike.textContent = `Feels like: ${Number(data.main.feels_like).toFixed(1)}º`;
  feelsLike.dataset.feelscelsius = data.main.feels_like;
  const humidity = document.querySelector('.extra-humidity');
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  const wind = document.querySelector('.extra-wind');
  wind.textContent = `Wind: ${((Number(data.wind.speed)) * 3.6).toFixed(1)} km/h`;
  const pressure = document.querySelector('.extra-pressure');
  pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
  changeClouds(data);
  changeAllUnits();
}

export { changeCity };

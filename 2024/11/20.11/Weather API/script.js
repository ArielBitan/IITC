import { API_KEY } from "./env";

const cityNameElement = document.querySelector(".city-name");
const weatherIconElement = document.getElementById("weatherIcon");
const mainTempElement = document.querySelector(".temp");
const tempDescElement = document.querySelector(".desc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLatAndLon);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function getLatAndLon(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  getMainWeatherData(lat, lon);
}

async function getMainWeatherData(lat, lon) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const imgCode = data.weather[0].icon;
    weatherIconElement.src =
      "http://openweathermap.org/img/w/" + imgCode + ".png";
    cityNameElement.innerHTML = data.name;
    mainTempElement.innerHTML = `${(data.main.temp - 273.15).toFixed(0)}°`;
    tempDescElement.innerHTML = data.weather[0].description;
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
}

async function getDailyWeatherData(lat, lon) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
}

getLocation();

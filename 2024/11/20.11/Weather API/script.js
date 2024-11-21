import { API_KEY } from "./env.js";

const cityNameElement = document.querySelector(".city-name");
const weatherIconElement = document.getElementById("weatherIcon");
const mainTempElement = document.querySelector(".temp");
const tempDescElement = document.querySelector(".desc");
const todaysTempElement = document.getElementById("today");
const ulElement = document.getElementById("tempsList");

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

  getMainForecast(lat, lon);
  getDailyForecasts(lat, lon);
}

async function getMainForecast(lat, lon) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const imgCode = data.weather[0].icon;
    weatherIconElement.src = `http://openweathermap.org/img/w/${imgCode}.png`;
    cityNameElement.innerHTML = data.name;
    mainTempElement.innerHTML = `${data.main.temp.toFixed(0)}°`;
    tempDescElement.innerHTML = data.weather[0].description;
    todaysTempElement.innerHTML = `${data.main.temp_min.toFixed(
      0
    )}°/${data.main.temp_max.toFixed(0)}°`;
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
}

function createForecastData(dailyForecasts) {
  const dailyMinTemps = [];
  const dailyMaxTemps = [];
  const dayNames = [];
  const icons = [];
  Object.values(dailyForecasts).forEach((item) => {
    dailyMinTemps.push(Math.min(...item.temps).toFixed(0));
    dailyMaxTemps.push(Math.max(...item.temps).toFixed(0));
    icons.push(
      item.icons[
        item.temps.findIndex((value) => value === Math.max(...item.temps))
      ]
    );
  });

  Object.keys(dailyForecasts).forEach((item) =>
    dayNames.push(getDayName(item))
  );
  createForecastItems(dailyMaxTemps, dailyMinTemps, dayNames, icons);
}

function createForecastItem(maxTemp, minTemp, dayName, icon) {
  const liElement = document.createElement("li");
  liElement.className = "list-item";

  const iconContainerElement = document.createElement("div");
  iconContainerElement.className = "icon-container";

  const iconElement = document.createElement("img");
  iconElement.src = `http://openweathermap.org/img/w/${icon}.png`;

  const dayNameElement = document.createElement("span");
  dayNameElement.textContent = dayName;

  const maxMinTempElement = document.createElement("span");
  maxMinTempElement.textContent = `${maxTemp}°/${minTemp}°`;

  iconContainerElement.appendChild(iconElement);
  iconContainerElement.appendChild(dayNameElement);
  liElement.appendChild(iconContainerElement);
  liElement.appendChild(maxMinTempElement);

  return liElement;
}

function createForecastItems(maxTemps, minTemps, dayNames, icons) {
  maxTemps.forEach((maxTemp, i) => {
    const liElement = createForecastItem(
      maxTemp,
      minTemps[i],
      dayNames[i],
      icons[i]
    );
    ulElement.appendChild(liElement);
  });
}

async function getDailyForecasts(lat, lon) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const dailyForecasts = {};

    data.list.forEach((element) => {
      const date = element.dt_txt.split(" ")[0];
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = {
          temps: [],
          icons: [],
        };
      }

      dailyForecasts[date].temps.push(element.main.temp);
      dailyForecasts[date].icons.push(element.weather[0].icon);
    });
    createForecastData(dailyForecasts);
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
}

function getDayName(dateStr) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateStr);
  var dayName = days[date.getDay()];
  return dayName;
}

getLocation();

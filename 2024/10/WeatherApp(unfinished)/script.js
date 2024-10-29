import { API_KEY } from "./env.js";

const dailyForecasts = {};

async function fetchWeatherData(cityName) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`
    );
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;

    fetchData(lat, lon);
  } catch (error) {
    console.log(error);
  }
}

async function fetchData(lat, lon) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    data.list.forEach((item) => {
      const date = new Date(item.dt * 1000).toISOString().split("T")[0];
      if (!dailyForecasts[date]) {
        dailyForecasts[date] = {
          temps: [],
        };
      }
      dailyForecasts[date].temps.push(item.main.temp);
      getAvgTemperatures(dailyForecasts);
    });
  } catch (error) {
    console.log(error);
  }
}

function getAvgTemperatures(dailyForecastss) {
  const avgTemps = {};

  Object.keys(dailyForecastss).forEach((date) => {
    const temps = dailyForecastss[date].temps;
    console.log(temps);

    const avgTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
    avgTemps[date] = avgTemp.toFixed(1);
  });
  return avgTemps;
}

fetchWeatherData("Tel-Aviv");

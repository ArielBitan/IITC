import { API_KEY } from "./env.js";

async function getLatAndLon(cityName) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`
    );
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;

    getData(lat, lon);
  } catch (error) {
    console.log(error);
  }
}
async function getData(lat, lon) {
  console.log(lat);
  console.log(lon);

  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getLatAndLon("Sde-Eliezer");

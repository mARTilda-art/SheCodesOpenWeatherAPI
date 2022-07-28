const axios = require("axios");

let apiKey = "54fc91d14fe02d75665772e36d182ac8";
let city = "Sydney";
let units = "metric";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function showTemperature(response) {
  //console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  let message = `It is ${temperature} degrees in ${city}.`;
  //let city = response.data.name;
  temperatureElement.innerHTML = `Its ${temperature}°C`;
  description.innerHTML = response.data.weather[0].description;
  let h1 = document.querySelector("h1");
  h1.innerHTML = message;
}

axios
  .get(`${apiUrl}${city}&units=${units}&appid=${apiKey}`)
  .then(showTemperature);

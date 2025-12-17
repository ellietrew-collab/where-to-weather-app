// LOCATION A
function searchCityA(city) {
  let apiKey = "1f9f285004aef49bt1147a6ab5o3ba7b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeatherA);
}

function handleSearchSubmitA(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-formA");
  let city = searchInput.value;
  if (city) {
    searchCityA(city);
    getForecastA(city);
  }
}

let searchButtonA = document.querySelector(".locationA .button");
searchButtonA.addEventListener("click", handleSearchSubmitA);

function displayWeatherA(response) {
  let city = response.data.city;
  let cityDisplay = document.querySelector("#cityA");
  cityDisplay.innerHTML = city.toUpperCase();

  let icon = response.data.condition.icon_url;
  let emojiWeatherA = document.querySelector("#emojiWeatherA");
  emojiWeatherA.innerHTML = `<img src="${icon}" alt="Weather icon">`;

  let temperature = Math.round(response.data.temperature.current);
  let temperatureDisplay = document.querySelector("#tempDisplayA");
  temperatureDisplay.innerHTML = `${temperature}°C`;

  let feelsLike = Math.round(response.data.temperature.feels_like);
  let windSpeed = Math.round(response.data.wind.speed);
  let currentDateElement = document.querySelector("#dashboardA");
  currentDateElement.innerHTML = `It feels like ${feelsLike}°C. The wind is ${windSpeed}km/h`;

  let skyDisplay = response.data.condition.description;
  let skyStatusA = document.querySelector("#skyStatusA");
  skyStatusA.innerHTML = `<em>${skyDisplay.toUpperCase()}</em>`;
}

// LOCATION B
function searchCityB(city) {
  let apiKey = "1f9f285004aef49bt1147a6ab5o3ba7b";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeatherB);
}

function handleSearchSubmitB(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-formB");
  let city = searchInput.value;
  if (city) {
    searchCityB(city);
  }
}

let searchButtonB = document.querySelector(".locationB .button");
searchButtonB.addEventListener("click", handleSearchSubmitB);

function displayWeatherB(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureDisplay = document.querySelector("#tempDisplayB");
  temperatureDisplay.innerHTML = `${temperature}°C`;

  let city = response.data.city;
  let cityDisplay = document.querySelector("#cityB");
  cityDisplay.innerHTML = city.toUpperCase();

  let skyDisplay = response.data.condition.description;
  let skyStatusB = document.querySelector("#skyStatusB");
  skyStatusB.innerHTML = `<em>${skyDisplay.toUpperCase()}</em>`;

  let feelsLike = Math.round(response.data.temperature.feels_like);
  let windSpeed = Math.round(response.data.wind.speed);
  let currentDateElement = document.querySelector("#dashboardB");
  currentDateElement.innerHTML = `Feels like ${feelsLike}°C. Wind ${windSpeed} km/h`;
}

// FORECAST A
function getForecastA(city) {
  let apiKey = "1f9f285004aef49bt1147a6ab5o3ba7b";
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayForecastA);
}

function displayForecastA(response) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="day">
      <p class="forecastDay">${day}</p>
      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="weather">
      <p class="tempDisplay"><span class="higherTemp">15°</span> 8°</p>
    </div>`;
  });

  let forecastElementA = document.querySelector("#forecastA");
  forecastElementA.innerHTML = forecastHTML;
}

// FORECAST B
function displayForecastB() {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let forecastHTML = "";

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="day">
      <p class="forecastDay">${day}</p>
      <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="weather">
      <p class="tempDisplay"><span class="higherTemp">15°</span> 8°</p>
    </div>`;
  });

  let forecastElementB = document.querySelector("#forecastB");
  forecastElementB.innerHTML = forecastHTML;
}

displayForecastA();
displayForecastB();

'use strict';

const weather = document.getElementById("weather");

fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')

.then(response => response.json())
  .then(data => {
    weather.innerHTML = 
    `<img src="http://openweathermap.org/img/w/10d.png">
    <p> q: ${data.name}</p>
    <p>temp: ${data.main.temp} C</p>
    <p>pressure: ${data.main.pressure}</p>
    <p>description: ${data.weather[0].description}</p>
    <p>humidity: ${data.main.humidity}%</p>
    <p>speed: ${data.wind.speed}m/s</p>
    <p>deg: ${data.wind.deg} degree</p>`
  })
  .catch(error => {
    console.log(error);
  });

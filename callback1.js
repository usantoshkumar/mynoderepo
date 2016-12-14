var weather = require('./location.js');

weather(function (currentWeather) {
    console.log(currentWeather);
});
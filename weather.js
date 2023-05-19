function getWeather(city) {
    // Replace 'API_KEY' with your actual API key
    var apiKey = '';
    var apiUrl = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;
    
    fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayWeather(data);
      })
      .catch(function(error) {
        console.log('Error:', error);
      });// Function to fetch weather data from API
function getWeather(city) {
  var apiKey = 'f01677dc818d4c99a5c151536231905';
  var apiUrl = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city;
  
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

// Function to display weather data
function displayWeather(data) {
  var resultElement = document.getElementById('weather-result');
  
  var weatherCondition = data.current.condition.text;
  var temperature = data.current.temp_c;
  var humidity = data.current.humidity;
  var windSpeed = data.current.wind_kph;
  var dateTime = data.current.last_updated;
  
  var html = '<p><strong>Weather Condition:</strong> ' + weatherCondition + '</p>' +
             '<p><strong>Temperature:</strong> ' + temperature + '°C</p>' +
             '<p><strong>Humidity:</strong> ' + humidity + '%</p>' +
             '<p><strong>Wind Speed:</strong> ' + windSpeed + ' km/h</p>' +
             '<p><strong>Date and Time:</strong> ' + dateTime + '</p>';
  
  resultElement.innerHTML = html;
}

// Event listener for form submission
document.getElementById('weather-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var city = document.getElementById('city-input').value;
  getWeather(city);
});

  }
  
  // Function to display weather data
  function displayWeather(data) {
    var resultElement = document.getElementById('weather-result');
    
    var weatherCondition = data.current.condition.text;
    var temperature = data.current.temp_c;
    var humidity = data.current.humidity;
    var windSpeed = data.current.wind_kph;
    var dateTime = data.current.last_updated;
    
    var html = '<p><strong>Weather Condition:</strong> ' + weatherCondition + '</p>' +
               '<p><strong>Temperature:</strong> ' + temperature + '°C</p>' +
               '<p><strong>Humidity:</strong> ' + humidity + '%</p>' +
               '<p><strong>Wind Speed:</strong> ' + windSpeed + ' km/h</p>' +
               '<p><strong>Date and Time:</strong> ' + dateTime + '</p>';
    
    resultElement.innerHTML = html;
  }
  
  // Event listener for form submission
  document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var city = document.getElementById('city-input').value;
    getWeather(city);
  });
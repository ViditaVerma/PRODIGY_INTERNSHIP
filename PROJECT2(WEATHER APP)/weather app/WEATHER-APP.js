async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'bd12e21ac6221bcba5fcaf5c8782f580'; // Your API Key (check if fully correct!)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Now update HTML with correct IDs
    document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerText = `${data.main.temp} °C`;
    document.getElementById('description').innerText = `${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `${data.main.humidity}`;
    document.getElementById('wind').innerText = `${data.wind.speed}`;
  } catch (error) {
    document.getElementById('cityName').innerText = "Error";
    document.getElementById('temperature').innerText = "--";
    document.getElementById('description').innerText = error.message;
    document.getElementById('humidity').innerText = "--";
    document.getElementById('wind').innerText = "--";
  }
}



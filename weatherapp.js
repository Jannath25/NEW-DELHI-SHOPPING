const button = document.getElementById("searchBtn");
const weather = document.getElementById("weather");

button.addEventListener("click", getWeather);

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    const apiKey = "6cc2db09844a31a3737bd9c1d87d0296";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        weather.innerHTML = `
            <h2>${data.name}</h2>
            <h3>🌡 ${data.main.temp} °C</h3>
            <p>☁ ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;

    } catch (error) {

        weather.innerHTML = `<h3>${error.message}</h3>`;

    }

}
const prompt = `
Temperature: ${temp}°C
Condition: ${condition}
Humidity: ${humidity}%
Wind Speed: ${wind} m/s

Give clothing advice, health tips, and travel advice in 3 short points.
`;

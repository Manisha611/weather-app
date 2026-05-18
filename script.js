async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "f6fea29ca26bde3b7a0e6b91e71f83ec";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if (data.cod === "404") {

            document.getElementById("error").innerText =
                "City not found";

            return;
        }

        if (data.cod === 401) {

            document.getElementById("error").innerText =
                "Invalid API Key";

            return;
        }

        document.getElementById("error").innerText = "";

        document.getElementById("cityName").innerText =
            data.name;

        document.getElementById("temperature").innerText =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").innerText =
            "Condition: " + data.weather[0].main;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerText =
            "Wind Speed: " + data.wind.speed + " km/h";

    } catch (error) {

        document.getElementById("error").innerText =
            "Something went wrong";

    }

}
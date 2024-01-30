//alert("Error")
const apiKey = "abaeab398bc7daf9055532bec00adf0a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBttn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.scr = "images/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.scr = "images/rain.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.scr = "images/drizzle.png";
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.scr = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
}


searchBttn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

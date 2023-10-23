const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const apiKey = API_KEY
const weatherIcon = document.querySelector(".weather img")
document.querySelector("button").addEventListener("click", function() {
    const cityName = document.querySelector("input").value;
    checkWeather(cityName);
})


async function checkWeather(cityName) {
    const response = await fetch(`${apiUrl}&appid=${apiKey}&q=${cityName}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else {
        const data = await response.json();
        document.querySelector(".temp").innerHTML = data.main.temp+" °c";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";  
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}


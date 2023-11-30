

const apiKey = "aa19913c8b12bfa26405b30725a82e59";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json()


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "˚C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".status").innerHTML = data.weather[0].main;
    document.querySelector(".max-temp").innerHTML = data.main.temp_max + "˚C";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".temp_min").innerHTML = data.main.temp_min + "˚C";
    document.querySelector(".visibility").innerHTML = data.visibility + " m";



    if (data.weather[0].main == "Clouds") {
        weathericon.src = "media/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "media/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "media/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "media/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "media/mist.png"
    }
    else if (data.weather[0].main == "Snow") {
        weathericon.src = "media/snow.png"
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";

    document.querySelector(".weather").style.display = "block";
    }

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather();
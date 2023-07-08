// URL = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// KEY=e60f9bc1718956090e276eca8c0a9c7f
const API_KEY = `e60f9bc1718956090e276eca8c0a9c7f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
const weather1 = document.querySelector("#weather1")
const weather2 = document.querySelector("#weather2")
const bgimg = document.querySelector("#bgimg")
const container = document.querySelector(".container")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h4 class="ar"> Loading... <h4>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h5 class="ar"> City Not Found<h5>
        `
        return;
    }
    weather.innerHTML = `
        <div >
            <img class="ar" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div class="ar">
            <h1>${data.main.temp}℃ </h1>
            <h5> ${data.weather[0].main} </h5>
        </div>
    `
    weather1.innerHTML =`
    <div>
        <h5> ${data.name}</h5>
    </div>
    `
    weather2.innerHTML =`
    <div>
        <img src="img/wind.png" height="50px" width="50px" alt="">
    </div>
    <div>
        <h5>Wind Speed ${data.wind.speed} Km/H</h5>
    </div>
    `
    weather3.innerHTML =`
    <div>
        <img src="img/humidity.png" height="50px" width="50px" alt="">
    </div>
    <div>
        <h5> ${data.main.humidity}% Humidity</h5>
    </div>
    `
    // if(data.weather[0].main=="Clouds"){
    //     bgimg.innerHTML = '<img src="img/clouds.jpg" alt="" height="400px" width="400px" class="bg" >'
    // }
    if(data.weather[0].main=="Clouds"){
        container.style.backgroundImage = "url('img/clouds.jpg')";
        bgimg.innerHTML = '<img src="img/clouds1.png" alt="" height="100px" width="100px" class="bg" >'
    }
    else if(data.weather[0].main=="Thunderstorm"){
        container.style.backgroundImage = "url('img/clouds.jpg')";
        bgimg.innerHTML = '<img src="img/clouds1.png" alt="" height="100px" width="100px" class="bg" >'
    }
    // else if(data.weather[0].main=="Clear"){
    //     bgimg.innerHTML = '<img src="img/clear.jpg" alt="" height="400px" width="400px" class="bg" >'
    // }
    else if(data.weather[0].main=="Clear"){
        container.style.backgroundImage = "url('img/clear.jpg')";
        bgimg.innerHTML = '<img src="img/clear1.png" alt="" height="200px" width="200px" class="bg" >'
    }
//    else if(data.weather[0].main=="Snow"){
//         bgimg.innerHTML = '<img src="img/snow.jpg" alt="" height="400px" width="400px" class="bg" >'
//     }
    else if(data.weather[0].main=="Snow"){
        container.style.backgroundImage = "url('img/snow.jpg')";
        bgimg.innerHTML = '<img src="img/snow1.png" alt="" height="200px" width="200px" class="bg" >'
    }
    // else if(data.weather[0].main=="Rain"){
    //     bgimg.innerHTML = '<img src="img/rain.jpg" alt="" height="400px" width="400px" class="bg" >'
    // }
    else if(data.weather[0].main=="Rain"){
        container.style.backgroundImage = "url('img/rain.jpg')";
        bgimg.innerHTML = '<img src="img/rain1.png" alt="" height="200px" width="200px" class="bg" >'
    }
    // else if(data.weather[0].main=="Haze"){
    //     bgimg.innerHTML = '<img src="img/haze.jpg" alt="" height="400px" width="400px" class="bg" >'
    // }
    else if(data.weather[0].main=="Haze"){
        container.style.backgroundImage = "url('img/Haze.jpg')";
        bgimg.innerHTML = '<img src="img/haze1.png" alt="" height="200px" width="200px" class="bg" >'
    }
    // else if(data.weather[0].main=="Mist"){
    //     bgimg.innerHTML = '<img src="img/mist.jpg" alt="" height="400px" width="400px" class="bg" >'
    // }
    else if(data.weather[0].main=="Mist"){
        container.style.backgroundImage = "url('img/mist.jpg')";
        bgimg.innerHTML = '<img src="img/mist1.png" alt="" height="200px" width="200px" class="bg" >'
    }
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)
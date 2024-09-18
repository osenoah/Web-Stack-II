let apiKey = "apiKey";
let apiUrl = //

let searchBox = document.querySelector(".search input");
let sButton = document.querySelector(".search button");
let wIcon = document.querySelector('.wicon')
var error = document.querySelector(".error")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

if (response.status === 404) {
    document.querySelector('.error').style.display = "block"
    document.querySelector('.weather').style.display = "none"
} else {
    switch (data.weather[0].main) {
        case 'Clouds':
            wIcon.src = "imgs/clear.png";
        break;
        case 'Clear':
            wIcon.src = "imgs/clear.png";
        break;
        case 'Drizzle':
            wIcon.src = "imgs/drizzle.png";
        break;
        case 'Rain':
        wIcon.src = "imgs/rain.png";
        break;
        case 'Snow':
            wIcon.src = "imgs/snow.png";
        break;
    }
    
    

console.log(data);
document.querySelector('.city').innerHTML = data.name
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c"
document.querySelector('.humidity').innerHTML = data.main.humidity + "%"
document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + "km/h"


}
}

function sbutton() {
    checkWeather(searchBox.value);
    document.querySelector('.weather').style.display = "block"
    document.querySelector('.error').style.display = "none"

}

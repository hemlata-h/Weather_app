const apiKey ="76253bb2da142161da13e9a885744b40";
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=76253bb2da142161da13e9a885744b40&units=metric
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore" ;
 const apiURL= "https://api.openweathermap.org/data/2.5/weather?&appid=76253bb2da142161da13e9a885744b40&units=metric";
let countryName = document.querySelector("#box");
let search = document.querySelector(".circle");
let image = document.querySelector("#sun");
async function checkWeather(city){
    const response = await fetch(apiURL+`&q=${city}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerText = data.main.temp +"°C";
    document.querySelector(".stateName").innerText = data.name;
    document.querySelector("#humy").innerText = data.main.humidity + "%";
    document.querySelector("#windy").innerText = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
 image.src = "clouds.png";
    }
    if(data.weather[0].main == "Clear"){
        image.src = "clear.png";
           }
           if(data.weather[0].main == "Rain"){
            image.src = "rain.png";
               }
               if(data.weather[0].main == "Drizzle"){
                image.src = "drizzle.png";
                   }
                   if(data.weather[0].main == "Mist"){
                    image.src = "mist.png";
                       }
}

search.addEventListener("click", () => {
 checkWeather(countryName.value);
});


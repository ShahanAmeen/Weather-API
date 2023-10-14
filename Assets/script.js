var ApiKey = "8f0fa8364b82a56ff6b29b97a2963b6e"


var searchBtn = document.querySelector("#search-button")

searchBtn.addEventListener("click",function(){
var cityValue = document.querySelector("#search-value").value
console.log(cityValue)
//call geocode function here with cityValue as the parameter argument
getCoordinate(cityValue)
})

function getCoordinate(city){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=3&appid=${ApiKey}`)
    .then(response => response.json())
    .then(data =>{      
    console.log(data)
        currentWeather(data[0].lat, data[0].lon)
        forecast(data[0].lat, data[0].lon)
    })
 
}

function currentWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=imperial`)
    .then(response => response.json())
    .then(data =>{      
    console.log(data)
        var cityname = $("<h2>").text(data.name)
        var temp = $("<h2>").text("Temp: "+ data.main.temp)
        var wind = $("<h2>").text("wind: "+ data.wind.speed)
        var humidity = $("<h2>").text("humidity: "+ data.main.humidity)




        $("#today").append(cityname, temp, wind, humidity )
       
    })
}
    function forecast(lat,lon){
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=imperial`)
        .then(response => response.json())
        .then(data =>{      
        console.log(data)
            var cityname = $("<h2>").text(data.name)
             var temp = $("<h3>").text("Temp: "+ data.main.temp)
             var wind = $("<h3>").text("wind: "+ data.wind.speed)
             var humidity = $("<h3>").text("humidity: "+ data.main.humidity)




        $("#forecast").append(cityname, temp, wind, humidity )
            /// work here
     })

}


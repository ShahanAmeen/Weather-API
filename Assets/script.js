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

        for(var i = 4;i<data.list.length; i=i+8){
            console.log(data.list[i])
            /// wrapper div for styling
            var cardDiv = $("<div>").addClass("cardDiv")
            

            var temp = $("<p>").text("Temp: "+ data.list[i].main.temp)
            var wind = $("<p>").text("wind: "+ data.list[i].wind.speed)
            var humidity = $("<p>").text("humidity: "+ data.list[i].main.humidity)



        $(cardDiv).append(temp, wind, humidity)
       $("#forecast").append(cardDiv)

        }


           
            /// work here
     })

}


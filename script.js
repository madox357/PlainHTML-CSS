var city = "London, uk"

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=83a46fff892e52067f38997a941ad942", 
function(data) {
    console.log(data); 

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $('.temp').append(temp);
});
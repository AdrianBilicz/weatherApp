$(document).ready(function(){
  
  var lat;
  var long;

  $.getJSON('http://ip-api.com/json', function(data){
    lat = data.lat;
    long = data.lon;
   $('#data').html('latitude: ' + lat + '<br>longitude: ' + long);

   var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long +'&appid=34e8a409e03edb6d39ed253cb3195252&units=metric';

       $.getJSON(api,function(data){
        var weatherType = data.weather[0].id.toString();
        var temp = data.main.temp.toFixed(1);
        var windSpeed = data.wind.speed.toFixed(1);
        var city = data.name;

        $('.temp').html(temp + '&#8451')
        $('.city').html(city)
        $('.wind').html(windSpeed + 'km/h')

        var today = new Date();
        var hour = today.getHours() < 10  ? '0' + today.getHours() : today.getHours()
        var minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
        var weekday = today.getUTCDay()

        if(hour > 6 && hour < 22){
          $('body').css('background','url(./img/day.jpg)')
        }else{
          $('body').css('background','url(./img/night_2.jpg)')
        }

          

            switch (weekday) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wendsday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        }
      $('#weekday').html(day)
      $('#time').html(hour + ':' + minutes)
      
      var icon = ''
console.log(weatherType)
       switch (weatherType[0]) {
    case '8':
        icon = "url(./img/sun.svg)";
        if(weatherType==801){
            icon = "url(./img/cloud-sun.svg)";
        }else if(weatherType > 801 && weatherType < 900){
            icon = "url(./img/cloudy.svg)";
        }
        break;
    case '3':
        icon = "url(./img/rainy-day.svg)";
        break;
    case '5':
        icon = "url(./img/rain.svg)";
        break;
    case '2':
        icon = "url(./img/flash.svg)";
        break;
    case '6':
        icon = "url(./img/snowflake.svg)";
        break;
    case '7':
        icon = "url(./img/mist.svg)";
   
}
     console.log(icon)
    $('.weather-icon').css('background-image', icon)

       })
    });
})


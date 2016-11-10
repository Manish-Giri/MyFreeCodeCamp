'use strict';

var lat = 0.0,
    lon = 0.0;

var testURL = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2de143494c0b295cca9337e1e96b00e0';
var myURL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid="ae0acb60e8db4952e081c2fb470a1b23"';

var city = '',
    state = '',
    country = '',
    postal = 0;

//if (navigator.geolocation) {
//    /* geolocation is available */
//    navigator.geolocation.getCurrentPosition(function (position) {
//        lat = position.coords.latitude;
//        lon = position.coords.longitude;
//        console.log("Latitude = " + lat);
//        console.log("Longitude = " + lon);
//
//        display(position.coords.latitude, position.coords.longitude);
//    });
//
//} else {
//    /* geolocation IS NOT available */
//    $("#jumbotron").html("geolocation not available");
//
//}

//get co-ordinates using ipinfo.io
$.getJSON('http://ipinfo.io', function (data) {
    console.log(data);
    var loc = data.loc;
    lat = loc.split(",")[0];
    lon = loc.split(",")[1];
    display(lat, lon);
    city = data.city;
    state = data.region;
    country = data.country;
    postal = parseInt(data.postal, 10);
});

function display(x, y) {
    $("#pos1").html("<b>" + x + "</b>");
    $("#pos2").html("<b>" + y + "</b>");
}

//function to calculate wind direction from degrees
function degToCompass(num) {
    //num = parseInt(num, 10);
    console.log("Inside degtocompass = " + num);

    var val = Math.floor(num / 22.5 + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[val % 16];
}

//function to return current temperature
function convertTemp(currTemp) {

    //get celsius from kelvin
    return Math.round(currTemp - 273.15);
}

$("button").click(function () {
    console.log("In Latitude = " + lat);
    console.log("In Longitude = " + lon);

    //prepare api call
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=ae0acb60e8db4952e081c2fb470a1b23',
        //url: testURL,
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function success(data) {

            console.log(data);

            //---------get the clipart---------------
            var picLink = 'http://openweathermap.org/img/w/';
            var picName = data.weather[0].icon;
            picLink += picName + ".png";

            $("#picture").empty().append('<img src="' + picLink + '">');

            //----------get the temperature-----------
            var curTemp = convertTemp(data.main.temp);
            console.log("Current temp = " + curTemp);
            //$("#temp").empty().append("<b>" + curTemp + "</b>");
            $("#picture").append("<b>" + curTemp + "</b>");

            //----------get the place----------------------
            var area = city + ", " + state + ", " + country;
            $("#area").empty().append("<b>" + area + "</b>");

            //----------get weather conditions------------
            $("#conditions").empty().append("<b>" + data.weather[0].description + "</b>");

            //----------get wind speed------------
            //get wind direction
            var windSpeed = degToCompass(data.wind.deg);
            //add wind speed
            windSpeed += ' ' + data.wind.speed;
            //display wind speed
            $("#wind-speed").empty().append("<b>" + windSpeed + "</b>");
        },
        error: function error(err) {
            alert(err);
        },
        beforeSend: function beforeSend(xhr) {
            //xhr.setRequestHeader("X-Mashape-Authorization", "32ROUuaq9wmshfk8uIxfd5dMc6H7p1lqdZSjsnXkB5bQtBteLK"); // Enter here your Mashape key
        }
    });
});

//# sourceMappingURL=1 (Manish_Giri's conflicted copy 2016-07-13)-compiled.js.map
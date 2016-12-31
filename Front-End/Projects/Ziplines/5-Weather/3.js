/**
 * Created by manishgiri on 12/30/16.
 */
var lat = 0.0,
    lon = 0.0;

var testURL = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2de143494c0b295cca9337e1e96b00e0';
var myURL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid="ae0acb60e8db4952e081c2fb470a1b23"';
var customURL = '';
var city = '',
    state = '',
    country = '',
    postal = 0;

var metric = true;

//object for images
var weatherConditions = {

    //Group 2xx: Thunderstorm
    '200': 'https://dl.dropbox.com/s/bit28oy0blfl4wt/200.jpg?dl=0',
    '201': 'https://dl.dropbox.com/s/l1hapvz780fb3pe/201.jpg?dl=0',
    '202': 'https://dl.dropbox.com/s/x1tgk2g6w98h5y3/202.jpg?dl=0',
    '210': 'https://dl.dropbox.com/s/94pbsvl931zho5n/210.jpg?dl=0',
    '211': 'https://dl.dropbox.com/s/t0jtda0u0zdinx6/211.jpg?dl=0',
    '212': 'https://dl.dropbox.com/s/j0upa47rtpunwwz/212.jpg?dl=0',
    '221': 'https://dl.dropbox.com/s/8cioovinq2eokef/221.jpg?dl=0',
    '230': 'https://dl.dropbox.com/s/g73qfen9km0tedy/230.jpg?dl=0',
    '231': 'https://dl.dropbox.com/s/xal30hfci6pxo19/231.jpg?dl=0',
    '232': 'https://dl.dropbox.com/s/4rzddpf7zfq4rd1/232.jpg?dl=0',

    //Group 3xx: Drizzle
    '300': 'https://dl.dropbox.com/s/i32hv862fz2q2mx/300.jpg?dl=0',
    '302': 'https://dl.dropbox.com/s/i32hv862fz2q2mx/300.jpg?dl=0',
    '312': 'https://dl.dropbox.com/s/i32hv862fz2q2mx/300.jpg?dl=0',
    '321': 'https://dl.dropbox.com/s/rblfuebqdx8hp7p/321.jpg?dl=0',

    //Group 5xx: Rain
    '500': 'https://dl.dropbox.com/s/hikaqts2zdudivb/500.jpg?dl=0',
    '501': 'https://dl.dropbox.com/s/wjyzjb9d2220rzu/501.jpg?dl=0',
    '502': 'https://dl.dropbox.com/s/2b4u3jpx9ak5tgm/502.jpg?dl=0',
    '504': 'https://dl.dropbox.com/s/drydadq8qpt9rm0/504.jpg?dl=0',
    '511': 'https://dl.dropbox.com/s/jngpsf9rs832ulc/511.jpg?dl=0',
    '520': 'https://dl.dropbox.com/s/f8orj5yaql1wtxo/520.jpg?dl=0',

    //Group 6xx: Snow
    '600': 'https://dl.dropbox.com/s/nwcxelj8el33o9i/600.jpg?dl=0',
    '601': 'https://dl.dropbox.com/s/9iez3vfxcxm1dgz/601.jpg?dl=0',
    '602': 'https://dl.dropbox.com/s/wum506zlb02vb4w/602.jpg?dl=0',
    '611': 'https://dl.dropbox.com/s/a6308hlam53jm6b/611.jpg?dl=0',
    '615': 'https://dl.dropbox.com/s/xlc992lwpkpxc72/615.jpg?dl=0',
    '620': 'https://dl.dropbox.com/s/xg4dpn3ln1y9ok1/620.png?dl=0',
    '622': 'https://dl.dropbox.com/s/wggjb27mil1p645/622.JPG?dl=0',

    //Group 7xx: Atmosphere
    '701': 'https://dl.dropbox.com/s/kjl0it789vhf9sw/701.jpg?dl=0',
    '711': 'https://dl.dropbox.com/s/mz9i9vg1gyd2857/711.JPG?dl=0',
    '721': 'https://dl.dropbox.com/s/kr2vng1ljfd48fl/721.jpg?dl=0',
    '731': 'https://dl.dropbox.com/s/p2carwppklz41dm/731.jpg?dl=0',
    '741': 'https://dl.dropbox.com/s/79jc4a0jdp6je8a/741.jpg?dl=0',
    '761': 'https://dl.dropbox.com/s/zp19s31l71hrrhj/761.JPG?dl=0',
    '762': 'https://dl.dropbox.com/s/ymkkawb6ur1ys43/762.jpg?dl=0',
    '781': 'https://dl.dropbox.com/s/6hpraee55zevmeu/781.jpg?dl=0',

    //Group 800: Clear - day and night
    '800': 'https://dl.dropbox.com/s/xt70kxsy4i7513z/800.JPG?dl=0',

    //Group 80x: Clouds - day and night

    '801': 'https://dl.dropbox.com/s/vj3o2kd7tj04rt9/801.jpg?dl=0',
    '802': 'https://dl.dropbox.com/s/pf3z3dbadh30nh5/802.JPG?dl=0',
    '803': 'https://dl.dropbox.com/s/ndcrpwg80tyh1v8/803.jpg?dl=0',
    '804': 'https://dl.dropbox.com/s/wthc781e0jpaapx/804.jpg?dl=0',

    //Group 90x: extreme

    '951': 'https://dl.dropbox.com/s/3i54fnzdjjsjss9/951.jpg?dl=0',
    '952': 'https://dl.dropbox.com/s/r6ay2x5otcoerra/952.jpg?dl=0',
    '957': 'https://dl.dropbox.com/s/efxp6ru36lquynu/957.jpg?dl=0',
    '960': 'https://dl.dropbox.com/s/x4bwz8tnjxwb8kb/960.jpg?dl=0',
    '962': 'https://dl.dropbox.com/s/1um9lo9qd63dnj5/962.jpg?dl=0'

};

//function to calculate wind direction from degrees
function degToCompass(num) {
    //num = parseInt(num, 10);
    //console.log("Inside degtocompass = " + num);

    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

function getWeather() {
    $.ajax({

        url: metric ? 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric' + '&appid=ae0acb60e8db4952e081c2fb470a1b23' : 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial' + '&appid=ae0acb60e8db4952e081c2fb470a1b23',

        //url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=ae0acb60e8db4952e081c2fb470a1b23',
        //url: customURL,
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            var tempUnit = '';
            var windUnit = '';

            console.log(data);

            //---------get background-----------------
            var weatherID = data.weather[0].id;
            console.log("Weather ID = " + weatherID);
            switch (weatherID) {
                case 200:
                    $("body").css("background-image", "url(" + weatherConditions['200'] + ")");
                    break;
                case 201:
                    $("body").css("background-image", "url(" + weatherConditions['201'] + ")");
                    break;
                case 202:
                    $("body").css("background-image", "url(" + weatherConditions['202'] + ")");
                    break;
                case 210:
                    $("body").css("background-image", "url(" + weatherConditions['210'] + ")");
                    break;
                case 211:
                    $("body").css("background-image", "url(" + weatherConditions['211'] + ")");
                    break;
                case 212:
                    $("body").css("background-image", "url(" + weatherConditions['212'] + ")");
                    break;
                case 221:
                    $("body").css("background-image", "url(" + weatherConditions['221'] + ")");
                    break;
                case 230:
                    $("body").css("background-image", "url(" + weatherConditions['230'] + ")");
                    break;
                case 231:
                    $("body").css("background-image", "url(" + weatherConditions['231'] + ")");
                    break;
                case 232:
                    $("body").css("background-image", "url(" + weatherConditions['232'] + ")");
                    break;

                case 300:
                case 301:
                case 310:
                    $("body").css("background-image", "url(" + weatherConditions['300'] + ")");
                    break;

                case 302:
                    $("body").css("background-image", "url(" + weatherConditions['302'] + ")");
                    break;

                case 311:
                case 312:
                    $("body").css("background-image", "url(" + weatherConditions['312'] + ")");
                    break;

                case 313:
                case 314:
                case 321:
                    $("body").css("background-image", "url(" + weatherConditions['321'] + ")");
                    break;

                case 500:
                    $("body").css("background-image", "url(" + weatherConditions['500'] + ")");
                    break;

                case 501:
                    $("body").css("background-image", "url(" + weatherConditions['501'] + ")");
                    break;

                case 502:
                case 503:
                    $("body").css("background-image", "url(" + weatherConditions['502'] + ")");
                    break;

                case 504:
                    $("body").css("background-image", "url(" + weatherConditions['504'] + ")");
                    break;
                case 511:
                    $("body").css("background-image", "url(" + weatherConditions['511'] + ")");
                    break;

                case 520:
                case 521:
                case 522:
                case 531:
                    $("body").css("background-image", "url(" + weatherConditions['520'] + ")");
                    break;

                case 600:
                    $("body").css("background-image", "url(" + weatherConditions['600'] + ")");
                    break;
                case 601:
                    $("body").css("background-image", "url(" + weatherConditions['601'] + ")");
                    break;
                case 602:
                    $("body").css("background-image", "url(" + weatherConditions['602'] + ")");
                    break;

                case 611:
                case 612:
                    $("body").css("background-image", "url(" + weatherConditions['611'] + ")");
                    break;

                case 615:
                case 616:
                    $("body").css("background-image", "url(" + weatherConditions['615'] + ")");
                    break;

                case 620:
                case 621:
                    $("body").css("background-image", "url(" + weatherConditions['620'] + ")");
                    break;

                case 622:
                    $("body").css("background-image", "url(" + weatherConditions['622'] + ")");
                    break;

                case 701:
                    $("body").css("background-image", "url(" + weatherConditions['701'] + ")");
                    break;
                case 711:
                    $("body").css("background-image", "url(" + weatherConditions['711'] + ")");
                    break;
                case 721:
                    $("body").css("background-image", "url(" + weatherConditions['721'] + ")");
                    break;

                case 731:
                case 751:
                    $("body").css("background-image", "url(" + weatherConditions['731'] + ")");
                    break;

                case 741:
                    $("body").css("background-image", "url(" + weatherConditions['741'] + ")");
                    break;

                case 761:
                    $("body").css("background-image", "url(" + weatherConditions['761'] + ")");
                    break;
                case 762:
                    $("body").css("background-image", "url(" + weatherConditions['762'] + ")");
                    break;
                case 781:
                    $("body").css("background-image", "url(" + weatherConditions['781'] + ")");
                    break;

                case 800:
                    $("body").css("background-image", "url(" + weatherConditions['800'] + ")");
                    break;
                case 801:
                    $("body").css("background-image", "url(" + weatherConditions['801'] + ")");
                    break;
                case 802:
                    $("body").css("background-image", "url(" + weatherConditions['802'] + ")");
                    break;
                case 803:
                    $("body").css("background-image", "url(" + weatherConditions['803'] + ")");
                    break;
                case 804:
                    $("body").css("background-image", "url(" + weatherConditions['804'] + ")");
                    break;

                case 951:
                    $("body").css("background-image", "url(" + weatherConditions['951'] + ")");
                    break;

                case 952:
                case 953:
                case 954:
                case 955:
                case 956:
                    $("body").css("background-image", "url(" + weatherConditions['952'] + ")");
                    break;

                case 957:
                case 958:
                case 959:
                    $("body").css("background-image", "url(" + weatherConditions['957'] + ")");
                    break;

                case 960:
                case 961:
                    $("body").css("background-image", "url(" + weatherConditions['960'] + ")");
                    break;

                case 962:
                    $("body").css("background-image", "url(" + weatherConditions['962'] + ")");
                    break;

            }

            //---------get the clipart---------------
            var picLink = 'http://openweathermap.org/img/w/';
            var picName = data.weather[0].icon;
            picLink += picName + ".png";

            $("#picture").empty().append('<img src="' + picLink + '">');

            //----------get the temperature-----------
            //var curTemp = convertTemp(data.main.temp);
            var curTemp = Math.round(data.main.temp);

            console.log("Current temp = " + curTemp);

            //unit check
            if (metric) {
                tempUnit = '&#x2103';
            } else {
                tempUnit = '&#x2109';
            }
            //$("#temp").empty().append("<b>" + curTemp + "</b>");
            $("#picture").append("<b>" + curTemp + " " + tempUnit + "</b>");

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

            //unit check
            if (metric) {
                //windUnit = '&#x2103';
                windUnit = 'm/sec';
            } else {
                //windUnit = '&#x2109';
                windUnit = 'miles/hour';
            }
            //display wind speed
            $("#wind-speed").empty().append("<b>" + windSpeed + " " + windUnit + "</b>");

        },
        error: function(err) {
            alert(err);
        },
        beforeSend: function(xhr) {
            //xhr.setRequestHeader("X-Mashape-Authorization", "32ROUuaq9wmshfk8uIxfd5dMc6H7p1lqdZSjsnXkB5bQtBteLK"); // Enter here your Mashape key
        }
    });
}

$('document').ready(function() {
    //get location
    $.getJSON('http://ipinfo.io', function(data) {
        console.log(data);
        console.log("Inside ipinfo");
        var loc = data.loc;
        lat = loc.split(",")[0];
        lon = loc.split(",")[1];
        //display(lat, lon);
        city = data.city;
        console.log("City = " + city);
        state = data.region;
        country = data.country;
        postal = parseInt(data.postal, 10);

        getWeather();

        console.log($("input:radio[id='option1']").is(':checked'));
        console.log("-------------------------------------------------");

        $(".target").change(function() {
            console.log("Handler for .change() called.");
            if ($("input[id='option1']").is(':checked')) {
                console.log("Inside metric");
                metric = true;
                getWeather();
            } else if ($("input[id='option2']").is(':checked')) {
                console.log("Inside imperial");
                metric = false;

                getWeather();
            }

        });

    });
});

//get co-ordinates using ipinfo.io
/*$.getJSON('http://ipinfo.io', function (data) {
 //console.log(data);
 var loc = data.loc;
 lat = loc.split(",")[0];
 lon = loc.split(",")[1];
 //display(lat, lon);
 city = data.city;
 state = data.region;
 country = data.country;
 postal = parseInt(data.postal, 10);

 });*/
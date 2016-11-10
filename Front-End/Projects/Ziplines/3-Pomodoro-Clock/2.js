//cache variables
var $sessionMinus = $("#sessionMinus span");
var $sessionLengthString = $("#sessionLength span");
var sessionLengthNum = parseInt($sessionLengthString.text(),10);
var $sessionPlus = $("#sessionPlus span"); 

var $breakMinus = $("#breakMinus span");
var $breakLengthString = $("#breakLength span");
var breakLengthNum = parseInt($breakLengthString.text(), 10);
var $breakPlus = $("#breakPlus span");

var $circleMinutes = $("#circle-minutes");
var circleMinutesNum = parseInt($circleMinutes.text(), 10);
var $circleSeconds = $("#circle-seconds");
var circleSecondsNum = parseInt($circleSeconds.text(), 10);


var $timerStart = $("#circle-play-pause");
var $timerSpan = $("#circle-play-pause span");
var $timerPause = $("#circle-pause");
var $timerReset = $("#circle-reset");
var $timerIndicator = $("#timer-type");

var nIntervalId = null;
var play = false;

var clickSound = new Audio("https://dl.dropbox.com/s/bvwejfwruycz0ac/button-21.wav?dl=0");

//test
console.log("Session Length = " + sessionLengthNum);
console.log("Break Length = " + breakLengthNum);
console.log("Timer minutes = " + circleMinutesNum);
console.log("Timer seconds = " + circleSecondsNum);


//click handlers
$sessionMinus.click(function() {
	if(sessionLengthNum > 1)  {
		if(play) {
			//when session minus button is clicked while timer is running
			play = false;
			$timerSpan.removeClass("glyphicon glyphicon-pause")
			$timerSpan.addClass("glyphicon glyphicon-play");
			stopTimer();
		}
		sessionLengthNum--;
		circleMinutesNum = sessionLengthNum;
		$sessionLengthString.html(sessionLengthNum);
		$circleMinutes.html(sessionLengthNum);
		stopTimer();
	}

});

$sessionPlus.click(function() {
		if(play) {
			//when session plus button is clicked while timer is running
			play = false;
			$timerSpan.removeClass("glyphicon glyphicon-pause")
			$timerSpan.addClass("glyphicon glyphicon-play");
			stopTimer();
		}
	sessionLengthNum++;
	circleMinutesNum = sessionLengthNum;
	$sessionLengthString.html(sessionLengthNum);
	$circleMinutes.html(sessionLengthNum);
	stopTimer();

});

$breakMinus.click(function() {
	if(breakLengthNum > 1) {
		breakLengthNum--;
		$breakLengthString.html(breakLengthNum);
	}

});

$breakPlus.click(function() {
	breakLengthNum++;
	$breakLengthString.html(breakLengthNum);
});

$timerStart.click(function() {
	console.log($(this).text());
	console.log(play);
	if(play) {
		clickSound.play();
		console.log("Pause clicked");
		play = false;
		$timerSpan.removeClass("glyphicon glyphicon-pause")
		$timerSpan.addClass("glyphicon glyphicon-play");
		stopTimer();
	}
	else {
		clickSound.play();
		play = true;
		$timerSpan.removeClass("glyphicon glyphicon-play")
		$timerSpan.addClass("glyphicon glyphicon-pause");

		startTimer();
	}
	
});



$timerReset.click(function() {
	play = false;
	clickSound.play();
	$timerSpan.removeClass("glyphicon glyphicon-pause")
	$timerSpan.addClass("glyphicon glyphicon-play");
	circleMinutesNum = sessionLengthNum;
	circleSecondsNum = 0;
	$circleMinutes.html(sessionLengthNum);
	$circleSeconds.html("00");
	stopTimer();

});

function startTimer() {
	nIntervalId = setInterval(changeTimer, 1000);
}

function changeTimer() {
	var minutes, seconds;
	var totalSeconds = circleMinutesNum * 60 + circleSecondsNum;
	console.log("Total Seconds = " + totalSeconds);
	if(totalSeconds > 0) {
		if(play) {
			totalSeconds--;
			minutes = parseInt(totalSeconds / 60, 10);
			seconds = parseInt(totalSeconds % 60, 10);
			circleMinutesNum = minutes;
			circleSecondsNum = seconds;

			minutes = minutes < 10 ? "0" + minutes: minutes;
			seconds = seconds < 10 ? "0" + seconds: seconds;

			$circleMinutes.html(minutes);
			$circleSeconds.html(seconds);

			$timerIndicator.html("Session");
			$timerIndicator.css("color", "#20B2AA");
		}
	}
	else {

		var audio = new Audio('https://dl.dropbox.com/s/rd3jpzpxns0lt5b/Alien_Siren.mp3?dl=0');
		audio.play();
		stopTimer();

		circleMinutesNum = breakLengthNum;
		circleSecondsNum = 00;
		play = true;
		$timerIndicator.html("Break");
		$timerIndicator.css("color", "red");
		startTimer();


	}
}

function stopTimer() {
	clearInterval(nIntervalId);
}
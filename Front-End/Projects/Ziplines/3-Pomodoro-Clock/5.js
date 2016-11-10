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
//indicate if play/pause
var play = false;

//indicate which type of timer
var session = true;

//indicate which type of timer
var type = "";

var clickSound = new Audio("https://dl.dropbox.com/s/bvwejfwruycz0ac/button-21.wav?dl=0");



//test
console.log("Session Length = " + sessionLengthNum);
console.log("Break Length = " + breakLengthNum);
console.log("Timer minutes = " + circleMinutesNum);
console.log("Timer seconds = " + circleSecondsNum);

//clear timer text
clearTimerText();


//-------------------------------------------------
//----------click handler manager - new
//-------------------------------------------------

function changeLength(type, change) {
	// change session's length
	if(type === "session") {
		

		//if plus or minus button is clicked while timer is running already
		if(play) {
			//when session minus/plus button is clicked while timer is running
			play = false;
			$timerSpan.removeClass("glyphicon glyphicon-pause")
			$timerSpan.addClass("glyphicon glyphicon-play");
			stopTimer();
			clearTimerText();
		}

		if(change === "plus") {
			sessionLengthNum++;
		}

		else if(change === "minus") {
			if(sessionLengthNum > 1) {
				sessionLengthNum--;
			}
		}
		circleMinutesNum = sessionLengthNum;
		$sessionLengthString.html(sessionLengthNum);
		$circleMinutes.html(sessionLengthNum);
		stopTimer();
		clearTimerText();

	}

	else if(type === "break") {
		//change break's length

		//when break minus/plus is clicked while break timer is running
		if(play) {
			//do nothing
		}
		else {
			if(change === "plus") {
				breakLengthNum++;
			}

			else if(change === "minus") {
				if(breakLengthNum > 1) {
					breakLengthNum--;
				}
			}

			$breakLengthString.html(breakLengthNum);

		}
	}
}

//-------------------------------------------------
//----------register four click handlers - new
//-------------------------------------------------

$sessionMinus.click(changeLength("session", "minus"));
$sessionPlus.click(changeLength("session", "plus"));
$breakMinus.click(changeLength("break", "minus"));
$breakPlus.click(changeLength("break", "plus"));

//-------------------------------------------------
//----------function to display timer - new
//-------------------------------------------------


$timerStart.click(function() {
	console.log($(this).text());
	console.log("Play = " + play);
	if(play) {
		//timer is already running and 'play' is clicked
		clickSound.play();
		clearTimerText();
		console.log("Pause clicked");
		play = false;
		$timerSpan.removeClass("glyphicon glyphicon-pause")
		$timerSpan.addClass("glyphicon glyphicon-play");
		stopTimer();
	}
	else {
		//timer is paused and 'play' is clicked
		if(!session) {
			console.log("Session = " + session);
			clearTimerText();
			session = false;
			setTimerText();
		}
		else {
			console.log("Session = " + session);
			clearTimerText();
			session = true;
			setTimerText();
		}
		clickSound.play();
		setTimerText();
		play = true;
		$timerSpan.removeClass("glyphicon glyphicon-play")
		$timerSpan.addClass("glyphicon glyphicon-pause");

		startTimer();
	}
	
});



$timerReset.click(function() {
	play = false;
	clickSound.play();
	clearTimerText();
	if(!session) {
		session = true;
	}
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
			//session = true;
			totalSeconds--;
			minutes = parseInt(totalSeconds / 60, 10);
			seconds = parseInt(totalSeconds % 60, 10);
			circleMinutesNum = minutes;
			circleSecondsNum = seconds;

			minutes = minutes < 10 ? "0" + minutes: minutes;
			seconds = seconds < 10 ? "0" + seconds: seconds;

			$circleMinutes.html(minutes);
			$circleSeconds.html(seconds);
			setTimerText();
			/*$timerIndicator.html("Session");
			$timerIndicator.css("color", "#20B2AA");*/
		}
	}
	else {

		var audio = new Audio('https://dl.dropbox.com/s/rd3jpzpxns0lt5b/Alien_Siren.mp3?dl=0');
		audio.play();
		stopTimer();

		circleMinutesNum = breakLengthNum;
		circleSecondsNum = 00;
		play = true;
		if(!session) {
			session = true;
			setTimerText();
			startTimer();
		}
		else if(session) {
			session = false;
			setTimerText();
			startTimer();
		}
		
		//setTimerText();
/*
		$timerIndicator.html("Break");
		$timerIndicator.css("color", "red");*/
		//startTimer();


	}
}



function stopTimer() {
	clearInterval(nIntervalId);
}

function setTimerText() {
	if(session) {
		$timerIndicator.html("<b>Session</b>");
		$timerIndicator.css("color", "green");
	}
	else {
		$timerIndicator.html("Break");
		$timerIndicator.css("color", "red");
	}
}

function clearTimerText() {
	$timerIndicator.html("");
}
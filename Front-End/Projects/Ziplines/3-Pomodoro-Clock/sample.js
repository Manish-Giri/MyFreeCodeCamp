/****************************************

    Variables

****************************************/

var minus = document.getElementById('mi');
var plus = document.getElementById('pl');
var runButt = document.getElementById('runButt');
var resetButt = document.getElementById('resetButt');
var minutes = parseInt(document.getElementById('min').innerHTML);
var timeMin = document.getElementById('timeMin');
var timeMinX = parseInt(document.getElementById('timeMin').innerHTML);
var timeSec = document.getElementById('timeSec');
var swi = false; 
var breakMinutes = parseInt(document.getElementById('breakMin').innerHTML);
var breakMinus = document.getElementById('bmi');
var breakPlus = document.getElementById('bpl');
var isBreak = false;
/****************************************

    Events

****************************************/

plus.onclick = function (event) {
  // add one minute to session length
  // update html
 minutes++;
 document.getElementById("min").innerHTML = minutes;
 timeMin.innerHTML = minutes;
};

minus.onclick = function (event) {
  // subtract one minute from session length
  // prevent session length from being set to less than 1
  // update html
  if (minutes < 2) {
    minutes = 1;
  } else {
    minutes--;
    document.getElementById("min").innerHTML = minutes;
    timeMin.innerHTML = minutes;
  };
};

runButt.onclick = function (event) {
  if (swi != true) {
    run();
    swi = true;
    runButt.innerHTML = '<a href="#">STOP</a>';
  } else {
    clearInterval(interNarhwal);
    swi = false;
    runButt.innerHTML = '<a href="#">RUN</a>';
  };
};

resetButt.onclick = function (event) {
  // reset displayed time to session length
  clearInterval(interNarhwal);
  timeSec.innerHTML = '00';
  document.getElementById("timeMin").innerHTML = minutes;
  if (swi = true){
    swi = false;
    runButt.innerHTML = '<a href="#">RUN</a>'; 
  };
};
/*****************************************
    break buttons
******************************************/
breakPlus.onclick = function (event) {
 breakMinutes++;
 document.getElementById("breakMin").innerHTML = breakMinutes;
};
breakMinus.onclick = function (event) {
  if (breakMinutes < 1) {
    breakMinutes = 0;
  } else {
    breakMinutes--;
    document.getElementById("breakMin").innerHTML = breakMinutes;
  };
};
/****************************************

    Functions

****************************************/

function run() {
     interNarhwal = setInterval( goTime , 1000);
}

function formatTime(time) {
  return String(time).length < 2 ? "0" + time : String(time);
}

function goTime () {
  var minutesRemaining = parseInt(timeMin.innerHTML);
  var secondsRemaining = parseInt(timeSec.innerHTML);
  var totalSeconds = minutesRemaining * 60 + secondsRemaining;
  if (totalSeconds > 0) {
    if (totalSeconds % 60 !== 0) {
      timeSec.innerHTML = formatTime(--secondsRemaining);
    } else {
      timeMin.innerHTML = formatTime(--minutesRemaining);
      timeSec.innerHTML = 59;
    }
  } else {
    clearInterval(interNarhwal);
    swi = false;
    // session is over, now start a break timer
    if(isBreak === false){
      timeMin.innerHTML = formatTime(breakMinutes);
      run();
      isBreak = true;
    } else {
      timeMin.innerHTML = formatTime(minutes);
      run();
      isBreak = false;
    };
    // update timeMin to break minutes
    // update timeSec to '00'
    // set a boolean of isBreak or breakActive to true
    // call run()
    // when code reaches here again, if isBreak, session and break are done
    runButt.innerHTML = '<a href="#">RUN</a>';
  }

};

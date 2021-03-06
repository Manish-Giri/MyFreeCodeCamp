/**
 * Created by manishgiri on 12/29/16.
 */
/**
 * Created by manishgiri on 12/28/16.
 */
/**
 * Created by manishgiri on 12/26/16.
 */
$(document).ready(function () {

    //reference to global variables
    var greenSound = '';
    var redSound = '';
    var blueSound = '';
    var yellowSound = '';

    var $numbers = $("#numbers");

    //array of colors
    var colors = ["green", "red", "blue", "yellow"];

    var computerSequence = [];
    var userSequence = [];


    //-----flag variables-----
    var sequenceMatch = false;
    var iterCount = 1;
    let isStrictChecked = false;

    //test notification
    //notifyUser();

    //for displaying count in box
    var turnCount = 0;
    $numbers.html(turnCount);


    //load sounds
    loadSounds();


    $('#start').on('change', function() {

        if ($(this).is(':checked')) {
            console.log('Start is checked');
            computerTurn(true);
            userTurn();
        }
        else {
            reset();
        }
        //console.log($(this).is(":checked"));
    });
    //console.log("outside");

    $("#strict").on('change', function () {
       if($(this).is(":checked")) {
           console.log(`Strict checked`);
           isStrictChecked = true;

       }
       else {
           console.log(`Strict not checked`);
           isStrictChecked = false;
       }
    });



    //------------------------------------------------------
    function computerTurn(lastSeq = false) {

        console.log("Inside computer turn function - line 1");

        //test - play last sequence

        if(lastSeq) {
            //if default parameter is not true, then add new button to sequence
            turnCount++;
            nextButton();
        }

        $numbers.html(turnCount);
        //call nextButton() to start the sequence
        //nextButton();


        console.log("Current computer sequence = ");
        console.log(computerSequence);

        //feature - decrease time between button presses as game progresses
        let speedValue = 1000;

        //when turnCount is between 1 and 5, speedValue = 1000
        //when turnCount is between 5 and 10, speedValue = 700
        //when turnCount is between 10 and 15, speedValue = 500
        //when turnCount is between 15 and 20, speedValue = 300

        if(turnCount >= 0 && turnCount < 5) {
            speedValue = 1000;
        }

        else if(turnCount >= 5 && turnCount < 10) {
            speedValue = 700;
        }

        else if(turnCount >= 10 && turnCount < 15) {
            speedValue = 500;
        }

        else if(turnCount >= 15 && turnCount <= 20) {
            speedValue = 300;
        }



        //generate through the sequence
        computerSequence.forEach(function (color, index) {
            (function (index) {
                setTimeout(function () {
                    switch (color) {
                        case "blue": blueButtonPress();
                            break;
                        case "red": redButtonPress();
                            break;
                        case "green": greenButtonPress();
                            break;
                        case "yellow": yellowButtonPress();
                            break;
                        default: console.log("Incorrect value");
                    }
                    //console.log("Waiting");
                }, speedValue * index);
            })(index);



        });

    }



    //------------------------------------------------------
    function userTurn() {
        console.log("Inside user turn function - line 1");
        userSequence = [];
        let incorrectSequence = false;
        let userColorNum = 0;

        //capture the button clicked
        $(".user-click").click(function () {

            userColorNum++;

            sequenceMatch = false;
            //userSequence = [];
            //fetch ID of current button pressed
            let currColor = this.id;
            console.log(`User clicked on ${currColor}`);
            userButtonPress(currColor);
            incorrectSequence = false;

            // //show user sequence
            // console.log("Current user sequence: ");
            // console.log(userSequence);

            //-------------------------------------------
            //add it to user sequence

            userSequence.push(currColor);
            //show user sequence
            console.log("Current user sequence: ");
            console.log(userSequence);

            //test lodash
            if(_.isEqual(userSequence, computerSequence)) {
                if(turnCount === 20) {
                    notifyGameWin();
                    reset();
                    return;
                }
                console.log("Inside lodash");
                console.log("Current computer sequence = ");
                console.log(computerSequence);
                console.log("Current user sequence: ");
                console.log(userSequence);
                userSequence = [];
                sequenceMatch = true;

            }
            else {

                if(userSequence.length <= computerSequence.length) {
                    console.log("Inside else");
                    if(userSequence[userColorNum-1] !== computerSequence[userColorNum-1]) {
                        console.log(`Wrong color pressed---`);
                        console.log(`Comp color was ${computerSequence[userColorNum]} but user color is ${userSequence[userColorNum]} `);
                        userSequence.pop();
                        incorrectSequence = true;
                        userColorNum = 0;

                    }

                }



                // userSequence.pop();
                // incorrectSequence = true;
            }
            //userColorNum++;


            //if sequence is incorrect, repeat last sequence
            if(incorrectSequence) {
                if(isStrictChecked) {
                    incorrectSequence = false;
                    computerSequence = [];
                    userSequence = [];
                    setTimeout(() => {
                        //begins a new sequence, so set count to 0
                        //notifyIncorrectButton();
                        turnCount = 0;
                        $numbers.html(turnCount);
                        computerTurn(true);
                    }, 1500);
                }
                else {
                    incorrectSequence = false;
                    userSequence = [];
                    setTimeout(() => {
                        computerTurn();
                    }, 1500);
                }

            }

            //if last sequence was correct, begin next sequence with a new button included

            if(sequenceMatch) {
                console.log("Inside sequence match if");
                userSequence = [];
                //turnCount++;
                sequenceMatch = false;

                userColorNum = 0;

                //userSequence = [];
                setTimeout(()=>{
                    iterCount++;
                    //update score
                    //$numbers.html(turnCount);
                    computerTurn(true);
                }, 1500);
            }

        })


    }



    //-------------------------------------------------------

    //--------UTILITIES--------------

    //-------------------------------------------------------


    function nextButton() {
        //generate a random number to pick next button to be pressed
        let randomNumber = Math.floor(Math.random() * colors.length);
        console.log(`Random number is ${randomNumber}`);
        let pickedColor = colors[randomNumber];
        //console.log(`Picked color is ${pickedColor}`);
        //add picked color to sequence array
        computerSequence.push(pickedColor);
        return pickedColor;
    }

    //function for computer to simulate button press without actual clicks on buttons
    function userButtonPress(color) {
        console.log(`User's button to be pressed - ${color}`);
        switch(color) {
            case "green": greenButtonPress(); break;
            case "red": redButtonPress(); break;
            case "blue": blueButtonPress(); break;
            case "yellow": yellowButtonPress(); break;
            default: console.log("Incorrect button press");
        }

    }

    //---currently unused-----
    function notifyIncorrectButton() {
        swal({
            title: "Uh-Oh!",
            text: "<p style='color: red;'>You messed up.</p>",
            html: true,
            timer: 6000,
            showConfirmButton: true,
            type: "warning",
            confirmButtonColor: '#004d40'
        });
    }
    
    function notifyGameWin() {
        swal("Good job!", "You won the game!", "success");
    }




    function reset() {
        console.log("Reset called");
        computerSequence = [];
        console.log(`Computer sequence = `);
        console.log(computerSequence);
        //console.log("");
        userSequence = [];
        console.log(`User sequence = `);
        console.log(userSequence);
        turnCount = 0;
        $numbers.html(turnCount);
    }




    //------------------------------------------------------
    //function to play sound and change color for each button press
    function greenButtonPress() {

        $("#green").removeClass("green-normal");
        $("#green").addClass("green-lighter");
        greenSound.play();
        setTimeout(() => {
            $("#green").removeClass("green-lighter");
            $("#green").addClass("green-normal");
        }, 300);
    }


    //red button
    function redButtonPress() {
        $("#red").removeClass("red-normal");
        $("#red").addClass("red-lighter");
        redSound.play();
        setTimeout(() => {
            $("#red").removeClass("red-lighter");
            $("#red").addClass("red-normal");
        }, 300);
    }

    //blue button
    function blueButtonPress() {
        //blue button sound

        $("#blue").removeClass("blue-normal");
        $("#blue").addClass("blue-lighter");
        blueSound.play();
        setTimeout(() => {
            $("#blue").removeClass("blue-lighter");
            $("#blue").addClass("blue-normal");
        }, 300);
    }

    //red button
    function yellowButtonPress() {
        $("#yellow").removeClass("yellow-normal");
        $("#yellow").addClass("yellow-lighter");
        yellowSound.play();
        setTimeout(() => {
            $("#yellow").removeClass("yellow-lighter");
            $("#yellow").addClass("yellow-normal");
        }, 300);
    }

    //------------------------------------------------------


    //function to initalize sounds
    function loadSounds() {
        greenSound = new Howl({
            src: ["http://crossorigin.me/https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"]
        });

        redSound = new Howl({
            src: ["http://crossorigin.me/https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"]
        });

        blueSound = new Howl({
            src: ["http://crossorigin.me/https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"]
        });

        yellowSound = new Howl({
            src: ["http://crossorigin.me/https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"],
            volume: 1.0,
        });

    }


});
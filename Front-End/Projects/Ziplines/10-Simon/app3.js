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
        //console.log($(this).is(":checked"));
    });
    //console.log("outside");



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
                }, 1000 * index);
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
                incorrectSequence = false;
                userSequence = [];
                setTimeout(() => {
                    computerTurn();
                }, 1500);
            }

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


    function notifyUser() {
        swal({
            title: "Uh-Oh!",
            text: "<p style='color: red;'>You messed up.</p>",
            html: true,
            timer: 20000,
            showConfirmButton: true,
            type: "warning",
            confirmButtonColor: '#004d40'
        });
    }




    //------------------------------------------------------
    //function to play sound and change color for each button press
    function greenButtonPress() {

        $("#green").removeClass("green-normal");
        $("#green").addClass("green-flash");
        greenSound.play();
        setTimeout(() => {
            $("#green").removeClass("green-flash");
            $("#green").addClass("green-normal");
        }, 300);
    }


    //red button
    function redButtonPress() {
        $("#red").removeClass("red-normal");
        $("#red").addClass("red-flash");
        redSound.play();
        setTimeout(() => {
            $("#red").removeClass("red-flash");
            $("#red").addClass("red-normal");
        }, 300);
    }

    //blue button
    function blueButtonPress() {
        //blue button sound

        $("#blue").removeClass("blue-normal");
        $("#blue").addClass("blue-flash");
        blueSound.play();
        setTimeout(() => {
            $("#blue").removeClass("blue-flash");
            $("#blue").addClass("blue-normal");
        }, 300);
    }

    //red button
    function yellowButtonPress() {
        $("#yellow").removeClass("yellow-normal");
        $("#yellow").addClass("yellow-flash");
        yellowSound.play();
        setTimeout(() => {
            $("#yellow").removeClass("yellow-flash");
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

    //------------------------------------------------------
    //gameplay
    //loadSequence();
    // computerTurn(true);
    // userTurn();


});
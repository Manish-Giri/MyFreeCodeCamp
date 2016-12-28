/**
 * Created by manishgiri on 12/26/16.
 */
$(document).ready(function () {

	//reference to global variables
	var greenSound = '';
	var redSound = '';
	var blueSound = '';
	var yellowSound = '';

	//array of colors
    var colors = ["green", "red", "blue", "yellow"];

    var computerSequence = [];
    var userSequence = [];
    var turn = '';
    var sequenceMatch = false;

    //test notification
    //`notifyUser();




	//load sounds
	loadSounds();

	//test sound play
	$("#green").click(function() {
		//greenSound.play();
		//test function greenButtonPress
        greenButtonPress();
	});

	$("#red").click(function() {
		//redSound.play();
        redButtonPress();
	});

	$("#blue").click(function() {
		//blueSound.play();
        blueButtonPress();
	});

	$("#yellow").click(function() {
		//yellowSound.play();
        yellowButtonPress();
	});


    $('#start').on('change', function() {
        // if ($(this).is(':checked')) {
        //     console.log('Start is checked');
        // }
        console.log($(this).is(":checked"));
    });
    //console.log("outside");




    //------------------------------------------------------
    function computerTurn() {
        //call nextButton() to start the sequence
        nextButton();
        //generate through the sequence
        computerSequence.forEach(function (color) {
            //check which color is the current one, and press the corresponding button
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

        });

        console.log("Currrent computer sequence: ");
        console.log(computerSequence);

        //test userTurn here
        //setTimeout(userTurn(), 500);
        userTurn();

        /*if(sequenceMatch) {
            console.log("Inside self call");
            setTimeout(computerTurn(), 200);

        }*/


    }




    //------------------------------------------------------
    function userTurn() {
        turn = 'user';

        //capture the button clicked
        $(".user-click").click(function () {
            //fetch ID of current button pressed
            let currColor = this.id;
            console.log(`User clicked on ${currColor}`);
            //add it to user sequence
            userSequence.push(currColor);

            //show user sequence
            console.log("Current user sequence: ");
            console.log(userSequence);
            //check if it matches the position for the same button in computer sequence
            for(let i = 0; i < computerSequence.length; i++) {
                if(computerSequence[i] !== userSequence[i]) {
                    console.log("Incorrect button press");
                    sequenceMatch = false;
                    //uncomment later
                    //notifyUser();
                }
                else {
                    sequenceMatch = true;
                    console.log("Sequence matches");
                }
            }

            //console.log(`Clicked on ${this.id}`);
            console.log(`Current value of sequenceMatch is ${sequenceMatch}`);

            if(sequenceMatch) {
                setTimeout(() => {computerTurn()}, 1000);
            }
        })


       /* console.log("Current user sequence: ");
        console.log(userSequence);*/


    }

    //------------------------------------------------------

    function nextButton() {
        //generate a random number to pick next button to be pressed
        let randomNumber = Math.floor(Math.random() * colors.length);
        console.log(`Random number is ${randomNumber}`);
        let pickedColor = colors[randomNumber];
        console.log(`Picked color is ${pickedColor}`);
        //add picked color to sequence array
        computerSequence.push(pickedColor);
        return pickedColor;
    }



















    //------------------------------------------------------
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
    computerTurn();
    //userTurn();






});
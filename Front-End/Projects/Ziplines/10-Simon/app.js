/**
 * Created by manishgiri on 12/26/16.
 */
$(document).ready(function () {

	//reference to global variables
	var greenSound = '';
	var redSound = '';
	var blueSound = '';
	var yellowSound = '';





	//load sounds
	loadSounds();

	//test sound play
	$("#green").click(function() {
		greenSound.play();
	});

	$("#red").click(function() {
		redSound.play();
	});

	$("#blue").click(function() {
		blueSound.play();
	});

	$("#yellow").click(function() {
		yellowSound.play();
	});


    $('#start').on('change', function() {
        // if ($(this).is(':checked')) {
        //     console.log('Start is checked');
        // }
        console.log($(this).is(":checked"));
    });
    //console.log("outside");



































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
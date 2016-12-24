/**
 * Created by manishgiri on 12/20/16.
 */
/**
 * Created by manishgiri on 12/10/16.
 */
/**
 * Created by manishgiri on 11/24/16.
 */
$(document).ready(function () {

    //------------------------------------
    //global variables

    //reference to board cells
    var $tile1 = $("#one");
    var $tile2 = $("#two");
    var $tile3 = $("#three");
    var $tile4 = $("#four");
    var $tile5 = $("#five");
    var $tile6 = $("#six");
    var $tile7 = $("#seven");
    var $tile8 = $("#eight");
    var $tile9 = $("#nine");


    //2D array -internal representation of board - 0 is empty, 1 is occupied
    var board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    //object to relate cell position and array  number
    var cellToMoves = {
        one: 0,
        two: 1,
        three: 2,
        four: 3,
        five: 4,
        six: 5,
        seven: 6,
        eight: 7,
        nine: 8
    };



    //reference to array which will determine number of moves left
    /* var movesLeft = new Array(9);
     movesLeft.fill(0)*/

    //reference to array of cells
    var cellsLeft = Object.keys(cellToMoves);
    console.log("cells left array - ")
    console.log(cellsLeft);

    //reference to x and o player box
    var $xInp = $("#xInp");
    var $oInp = $("#oInp");

    var $feedback = $("#feedback");


    //current player
    var isXSelected = false;
    var isPlayerSelected = false;
    var playerChoice = '';
    var aiChoice = '';
    var currentTurn = '';
    var playerScore = 0;
    var computerScore = 0;

    //function to determine current player based on input selection

    function selectPlayer() {
        $(".player-choice").click(function () {
            console.log("inside select player");
            if(this.id == 'xInp') {
                $($oInp).prop("disabled", true);
                console.log("Player X selected");

                isXSelected = true;
                isPlayerSelected = true;
                playerChoice = 'X';
                setMessage(`Turn ${playerChoice}`);
            }
            else if(this.id == 'oInp') {
                $($xInp).prop("disabled", true);
                console.log("Player O selected");
                isXSelected = false;
                isPlayerSelected = true;
                playerChoice = 'O';
                setMessage(`Turn ${playerChoice}`);
            }

            currentTurn = playerChoice;

        });

    }

    //selectPlayer();

    /*    //loop through board array and check contens
     board.forEach(function (cellRow, outIndex) {
     console.log("Row = " + outIndex);
     cellRow.forEach(function (cell, inIndex) {
     console.log(cell);
     })
     });*/






    //function to set message on top
    function setMessage(message) {
        $feedback.html(message);
    }

    //function to detect a player win
    function detectWin(player) {
        console.log(`Inside detect win, current player = ${player}`);
        //check a player's win in all cases
        if(
            ($tile1.html() === player && $tile4.html() === player && $tile7.html() === player) ||
            ($tile1.html() === player && $tile2.html() === player && $tile3.html() === player) ||
            ($tile1.html() === player && $tile5.html() === player && $tile9.html() === player) ||
            ($tile4.html() === player && $tile5.html() === player && $tile6.html() === player) ||
            ($tile7.html() === player && $tile8.html() === player && $tile9.html() === player) ||
            ($tile3.html() === player && $tile5.html() === player && $tile7.html() === player) ||
            ($tile2.html() === player && $tile5.html() === player && $tile8.html() === player) ||
            ($tile3.html() === player && $tile6.html() === player && $tile9.html() === player)
        ) {
            //set message
            setMessage(`Player ${player} wins!`);
            return true;
        }
        else {
            return false;
        }

    }

    //function to remove a cell from the playing board
    function removeCell(cells, cell) {
        //cells is the array, cell is the id of the cell clicled
        let cellPos = cells.indexOf(cell);
        if(cellPos !== -1) {
            cells.splice(cellPos, 1);
        }
    }



    //function to make the moves by the player
    function playerMove() {
        //if player selects X or 0
        selectPlayer();

        //check sequence of playermove execution
        let count = 1;
        console.log(`Player Move started = ${count}`);
        count++;


        //player clicks on a td cell
        $(".cell").click(function () {
            console.log("Callback running");
            let $this = $(this);
            let cellID = this.id;
            console.log(`clicked on cell with id ${cellID}`);
            //if player didn't select anything
            if (!isPlayerSelected) {
                //if a player has not been selected, select X by default
                isXSelected = true;
                isPlayerSelected = true;
                playerChoice = 'X';
            }

            currentTurn = playerChoice;

            let player = playerChoice;
            setMessage(`Turn ${player}`);
            $this.css("color", "rgb(84,84,84)");
            $this.html(player);

            //lookup cell position using id of current cell and remove it from movesLeft array
            let selectedCellPos = cellToMoves[cellID];
            console.log(`position of selected cell on board = ${selectedCellPos}`);


            //remove current cell from cellsLeft array
            removeCell(cellsLeft, cellID);

            //verify selected cell was removed
            console.log("After player click,cells left array - ")
            console.log(cellsLeft);

            //test aiMove() here
            //aiMove();
            //test a delay before AI move
            setTimeout(() => {
                aiMove()
            }, 1000);

        });



    }

    //test
    playerMove();

    function aiMove() {

        console.log("AI Move running");

        //test for player win from previous run - works for player win
        if(currentTurn !== "" && detectWin(currentTurn)) {
            playerScore++;
            console.log(`Player score is ${playerScore}`);

            console.log("Inside aimove - 1");

            //code for custom alerts - sweetalert library
            //alert(`Player ${currentTurn} won!!!`);
            swal("Good job!", `Player ${currentTurn} won!!!`, "success");
            let currentPlayerScore = $("#xScore").html();
            console.log(`Current player score = ${currentPlayerScore}`);

            $("#xScore").html(playerScore);

            //call restart
            restart();
            // game resets
            // reset();
            return;
        }


        //detemine if AI is using X or O
        let computerChoice = (playerChoice === 'X') ? 'O' : 'X';
        console.log(`AI Choice = ${computerChoice}`);
        currentTurn = computerChoice;


        //set message on top
        setMessage(`Turn ${computerChoice}`);


        //pick a random cell from the cellsleft array
        let selectedCellPos = Math.floor(Math.random() * cellsLeft.length);
        let selectedCell = cellsLeft[selectedCellPos];
        console.log(`selected cell id = ${selectedCell}`);

        //place an O in this cell
        let selectedCellID = ('#'+selectedCell);
        $(selectedCellID).css("color", "rgb(242,235,211)");
        $(selectedCellID).html(computerChoice);

        //remove this cell from array of available cells
        removeCell(cellsLeft, selectedCell);

        //verify selected cell was removed
        console.log("After AI click,cells left array - ")
        console.log(cellsLeft);


        //detect AI win here

        //test for player win from previous run - works for player win
        if(currentTurn !== "" && detectWin(currentTurn)) {
            console.log("Inside aimove - 2");


            console.log(selectedCellID);

            //ai move
            $(selectedCellID).css("color", "rgb(242,235,211)");
            $(selectedCellID).html(computerChoice);

            //print contents of winning cell for test
            let winAICell = $(selectedCellID).html();
            console.log(`Contents of ${selectedCellID} = ${winAICell}`);

            //increment ai score
            computerScore++;

            //create a delay so AI move can be drawn on screen
            setTimeout(function () {
                alert(`Player ${currentTurn} won!!!`);
                //draw ai score
                //computerScore++;
                console.log(`AI score is ${computerScore}`);
                $("#oScore").html(computerScore);

                //call restart
                restart();

                // resets by default
                // reset();
                return;
            }, 1000);

            // alert(`Player ${currentTurn} won!!!`);
            // reset();
            // return;
        }


    }

    //aiMove();

    function commonReset() {
        //do reset procedures common to both reset and restart

        //reset cellsLeft array
        cellsLeft = Object.keys(cellToMoves);

        //verify cellsLeft was reset
        // console.log("After game restart,cells left array - ")
        console.log(cellsLeft);

        //clear the board
        $(".cell").each(function () {
            $(this).html("");
        });

        //set message on top
        setMessage("Start game or select player");

        //reset global variables
        isXSelected = false;
        isPlayerSelected = false;
        playerChoice = '';
        aiChoice = '';
        currentTurn = '';


    }

    function reset() {

        console.log("-----GAME RESET-------");
        playerScore = 0;
        computerScore = 0;

        //call common reset function
        commonReset();

    }


    //function to restart game 
    function restart() {

        console.log("-----GAME RESTART-------");

        //call common reset function
        commonReset();
        
    }

    //hook up restart function to restart button
    $("#restart").click(restart);

    //hook up reset function to reset button
    $("#reset").click(reset);



})

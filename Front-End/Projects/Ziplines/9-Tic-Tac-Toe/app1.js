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

   /* //board cell contents
    var $tile1.html() = $tile1.html();
    var $tile2.html() = $tile2.html();
    var $tile3.html() = $tile3.html();
    var $tile4.html() = $tile4.html();
    var $tile5.html() = $tile5.html();
    var $tile6.html() = $tile6.html();
    var $tile7.html() = $tile7.html();
    var $tile8.html() = $tile8.html();
    var $tile9.html() = $tile9.html();*/

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
    movesLeft.fill(0)*/;

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
            if(currentTurn !== "" && detectWin(currentTurn)) {
                alert(`Player ${currentTurn} won!!!`)
            }

            let player = playerChoice;
            setMessage(`Turn ${player}`);
            $this.css("color", "rgba(84,84,84)");
            $this.html(player);

            //lookup cell position using id of current cell and remove it from movesLeft array
            let selectedCellPos = cellToMoves[cellID];
            console.log(`position of selected cell on board = ${selectedCellPos}`);

            /*
             //test length of movesLeft array
             console.log(`Length of movesLeft array = ${movesLeft.length}`);
             //delete this position from the movesleft array
             movesLeft.splice(selectedCellPos, 1);

             //verify movesLeft array
             console.log("Moves left = ");
             console.log(movesLeft)
             console.log(`Length of movesLeft array = ${movesLeft.length}`);
             */


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
    //play game until there are moves left in the board
    //while(cellsLeft.length) {
        //playerMove();
    //}

    function aiMove() {

        console.log("AI Move running");

        //detemine if AI is using X or O
        let computerChoice = (playerChoice === 'X') ? 'O' : 'X';
        console.log(`AI Choice = ${computerChoice}`);
        currentTurn = computerChoice;

        if(currentTurn !== "" && detectWin(currentTurn)) {
            alert(`Player ${currentTurn} won!!!`)
        }

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

    }

    //aiMove();
    
    function reset() {

        console.log("-----GAME RESET-------");

        //reset cellsLeft array
        cellsLeft = Object.keys(cellToMoves);

        //verify cellsLeft was reset
        // console.log("After game restart,cells left array - ")
        console.log(cellsLeft);

        //clear the board
        $(".cell").each(function () {
            $(this).html("");
        });

    }

    //hook up reset to restart button
    $("#restart").click(reset);

})

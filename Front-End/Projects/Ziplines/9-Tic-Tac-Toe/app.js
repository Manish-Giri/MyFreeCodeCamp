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

    //board cell contents
    var tile1Content = $tile1.html();
    var tile2Content = $tile2.html();
    var tile3Content = $tile3.html();
    var tile4Content = $tile4.html();
    var tile5Content = $tile5.html();
    var tile6Content = $tile6.html();
    var tile7Content = $tile7.html();
    var tile8Content = $tile8.html();
    var tile9Content = $tile9.html();

    //2D array -internal representation of board - 0 is empty, 1 is occupied
    var board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    //reference to x and o player box
    var $xInp = $("#xInp");
    var $oInp = $("#oInp");

    var $feedback = $("#feedback");


    //current player
    var isXSelected = false;
    var isPlayerSelected = false;

    //function to determine current player based on input selection

    function selectPlayer() {
        $(".player-choice").click(function () {
            console.log("inside select player");
            if(this.id == 'xInp') {
                $($oInp).prop("disabled", true);
                console.log("Player X selected");
                isXSelected = true;
                isPlayerSelected = true;
            }
            else if(this.id == 'oInp') {
                $($xInp).prop("disabled", true);
                console.log("Player O selected");
                isXSelected = false;
                isPlayerSelected = true;
            }

        });

        //if a player has not been selected, select X by default
        if(!isPlayerSelected) {
            isXSelected = true;
            isPlayerSelected = true;
        }
    }

    selectPlayer();

    //loop through board array and check contens
    board.forEach(function (cellRow, outIndex) {
        console.log("Row = " + outIndex);
        cellRow.forEach(function (cell, inIndex) {
            console.log(cell);
        })
    })



})
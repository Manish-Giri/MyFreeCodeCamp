const React = require('react');
let Header = require('./Header');
let Controls = require('./Controls');
let GameBoardContainer = require('./GameBoardContainer');


const ROWS = 38;
const COLS = 70;

function defaultBoard() {
    const ROWS = 38;
    const COLS = 70;
    let board = [];
    let cells = [];
    for(let i = 0; i < ROWS; i++) {
        cells = [];
        for(let j = 0; j < COLS; j++) {

            Math.random() < 0.5 ? cells.push(true) : cells.push(false);
            // if(pos) {
            //     //cells.push(<GameCell bckg={colors[0]} val={pos}/>)
            //     cells.push(true);
            // }
            // else {
            //     //cells.push(<GameCell bckg={colors[1]} val={pos}/>)
            //     cells.push(false);
            // }
        }
        //console.log(cells);
        board.push(cells);
    }
    //console.log(board);
    return board;
}

function neighborCheckAtPos(rowPos, cellPos, board, position) {

    // switch on position
    switch (position) {
        case "one" :  // TOP LEFT CELL

            // check first one
            if(rowPos === 0) {
                //check first cell
                if(cellPos === 0) {
                    if(board[ROWS-1][COLS-1]) {
                        return true;
                    }
                }

                // if not first cell
                else {
                    if(board[ROWS-1][cellPos-1]) {
                        return true;
                    }
                }

            }

            // all other rows
            else {
                // check first cell
                if(cellPos === 0) {
                    if(board[rowPos-1][COLS-1]) {
                        return true;
                    }
                }

                else {
                    if(board[rowPos-1][cellPos-1]) {
                        return true;
                    }
                }
            }

            return false;
            break;


        case "two":
            // TOP CELL
            // check row one
            if(rowPos === 0) {
                if(board[ROWS-1][cellPos]) {
                    return true;
                }
            }

            // all other rows

            else {
                if(board[rowPos-1][cellPos]) {
                    return true;
                }

            }

            return false;
            break;

        case "three":      // TOP RIGHT CELL

            //check first row
            if(rowPos === 0) {

                // check if last cell
                if(cellPos === COLS-1) {

                    if(board[ROWS-1][0]) {
                        return true;
                    }
                }

                // for all other cells
                if(board[ROWS-1][cellPos+1]) {
                    return true;
                }
            }

            // for all other rows
            else {

                // if last cell
                if(cellPos === COLS-1) {
                    if(board[rowPos-1][0]) {
                        return true;
                    }
                }

                else {
                    if(board[rowPos-1][cellPos+1]) {
                        return true;
                    }
                }

            }

            return false;
            break;


        case "four":
            // LEFT CELL
            // if last cell in row
            if(cellPos === 0) {
                if(board[rowPos][COLS-1]) {
                    return true;
                }
            }

            // for all other cells
            else {
                if(board[rowPos][cellPos-1]) {
                    return true;
                }
            }

            return false;
            break;


        case "five":
            // / FIFTH CELL

            // if last cell in row
            if(cellPos === 0) {
                if(board[rowPos][0]) {
                    return true;
                }
            }

            // for al other cells
            else {
                if(board[rowPos][cellPos+1]) {
                    return true;
                }
            }

            return false;
            break;


        case "six":  // BOTTOM LEFT CELL

            //if last row
            if(rowPos === ROWS-1) {

                // if first cell
                if(cellPos === 0) {
                    if(board[0][COLS-1]) {
                        return true;
                    }
                }

                else {
                    if(board[0][cellPos-1]) {
                        return true;
                    }
                }
            }

            // all other rows
            else {

                // if first cell
                if(cellPos === 0) {
                    if(board[rowPos+1][COLS-1]) {
                        return true;
                    }
                }

                // all other cells
                else {
                    if(board[rowPos+1][cellPos-1]) {
                        return true;
                    }
                }

            }

            return false;
            break;

        case "seven":
            // BOTTOM CELL

            //if last row
            if(rowPos === ROWS - 1) {
                if(board[0][cellPos]) {
                    return true;
                }
            }

            // all other rows
            else {
                if(board[rowPos+1][cellPos]) {
                    return true;
                }
            }

            return false;
            break;

        case "eight":
            // BOTTOM RIGHT CELL

            // if last row
            if(rowPos === ROWS - 1) {
                // if last cell
                if(cellPos === COLS - 1) {
                    if(board[0][0]) {
                        return true;
                    }
                }

                // other cells
                else {
                    if(board[0][cellPos + 1]) {
                        return true;
                    }
                }
            }

            // all other rows
            else {
                // if last cell
                if(cellPos === COLS - 1) {
                    if(board[rowPos+1][0]) {
                        return true;
                    }
                }

                // other cells
                else {
                    if(board[rowPos+1][cellPos+1]) {
                        return true;
                    }
                }
            }

            return false;
            break;
    }

}


function neighborOne(rowPos, cellPos, board) {

    // TOP LEFT CELL

    // check first one
    if(rowPos === 0) {
        //check first cell
        if(cellPos === 0) {
            if(board[ROWS-1][COLS-1]) {
                return true;
            }
        }

        // if not first cell
        else {
            if(board[ROWS-1][cellPos-1]) {
                return true;
            }
        }

    }

    // all other rows
    else {
        // check first cell
        if(cellPos === 0) {
            if(board[rowPos-1][COLS-1]) {
                return true;
            }
        }

        else {
            if(board[rowPos-1][cellPos-1]) {
                return true;
            }
        }
    }

    return false;
}

function neighborTwo(rowPos, cellPos, board) {

    // TOP CELL
    // check row one
    if(rowPos === 0) {
        if(board[ROWS-1][cellPos]) {
            return true;
        }
    }

    // all other rows

    else {
        if(board[rowPos-1][cellPos]) {
            return true;
        }

    }

    return false;

}

function neighborThree(rowPos, cellPos, board) {

    // TOP RIGHT CELL

    //check first row
    if(rowPos === 0) {

        // check if last cell
        if(cellPos === COLS-1) {

            if(board[ROWS-1][0]) {
                return true;
            }
        }

        // for all other cells
        if(board[ROWS-1][cellPos+1]) {
            return true;
        }
    }

    // for all other rows
    else {

        // if last cell
        if(cellPos === COLS-1) {
            if(board[rowPos-1][0]) {
                return true;
            }
        }

        else {
            if(board[rowPos-1][cellPos+1]) {
                return true;
            }
        }

    }

    return false;
}

function neighborFour(rowPos, cellPos, board) {
    // LEFT CELL

    // if last cell in row
    if(cellPos === 0) {
        if(board[rowPos][COLS-1]) {
            return true;
        }
    }

    // for all other cells
    else {
        if(board[rowPos][cellPos-1]) {
            return true;
        }
    }

    return false;

}

function neighborFive(rowPos, cellPos, board) {
    // FIFTH CELL

    // if last cell in row
    if(cellPos === 0) {
        if(board[rowPos][0]) {
            return true;
        }
    }

    // for al other cells
    else {
        if(board[rowPos][cellPos+1]) {
            return true;
        }
    }

    return false;
}

function neighborSix(rowPos, cellPos, board) {
    // BOTTOM LEFT CELL

    //if last row
    if(rowPos === ROWS-1) {

        // if first cell
        if(cellPos === 0) {
            if(board[0][COLS-1]) {
                return true;
            }
        }

        else {
            if(board[0][cellPos-1]) {
                return true;
            }
        }
    }

    // all other rows
    else {

        // if first cell
        if(cellPos === 0) {
            if(board[rowPos+1][COLS-1]) {
                return true;
            }
        }

        // all other cells
        else {
            if(board[rowPos+1][cellPos-1]) {
                return true;
            }
        }

    }

    return false;

}


function neighborSeven(rowPos, cellPos, board) {
    // BOTTOM CELL

    //if last row
    if(rowPos === ROWS - 1) {
        if(board[0][cellPos]) {
            return true;
        }
    }

    // all other rows
    else {
        if(board[rowPos+1][cellPos]) {
            return true;
        }
    }

    return false;
}


function neighborEight(rowPos, cellPos, board) {
    // BOTTOM RIGHT CELL

    // if last row
    if(rowPos === ROWS - 1) {
        // if last cell
        if(cellPos === COLS - 1) {
            if(board[0][0]) {
                return true;
            }
        }

        // other cells
        else {
            if(board[0][cellPos + 1]) {
                return true;
            }
        }
    }

    // all other rows
    else {
        // if last cell
        if(cellPos === COLS - 1) {
            if(board[rowPos+1][0]) {
                return true;
            }
        }

        // other cells
        else {
            if(board[rowPos+1][cellPos+1]) {
                return true;
            }
        }
    }

    return false;
}


class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameBoard: defaultBoard(),
            generations: 1,
            isPlaying: true
        }
        this.tick = this.tick.bind(this);
        this.nextBoard = this.nextBoard.bind(this);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.randomize = this.randomize.bind(this);
    }

    tick() {
        this.setState(prevState => ({
            generations: prevState.generations + 1,
            gameBoard: this.nextBoard()

        }));
    }

    componentDidMount() {
        this.timer = setInterval( () =>{
            this.tick()
        }, 300);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    nextBoard() {
        let currentBoard = this.state.gameBoard;
        return currentBoard.map((boardRow, boardRowPos) => {
            return boardRow.map((cell, cellPos) => {
                //return cell = !cell;

                /*
                  -------------------------------------------------
                 for every cell, find count of it's neighbors
                 -------------------------------------------------

                */

                let neighborCount = 0;

                /*

                // FIND FIRST NEIGHBOR STATUS
                if(neighborOne(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }


                // FIND SECOND NEIGHBOR STATUS
                if(neighborTwo(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }

                // FIND THIRD NEIGHBOR STATUS
                if(neighborThree(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }


                // FIND FOUTH NEIGHBOR STATUS
                if(neighborFour(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }

                // FIND FIFTH NEIGHBOR STATUS
                if(neighborFive(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }


                // FIND SIXTH NEIGHBOR STATUS
                if(neighborSix(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }


                // FIND SEVENth NEIGHBOR STATUS
                if(neighborSeven(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }


                // FIND EIGTH NEIGHBOR STATUS
                if(neighborEight(boardRowPos, cellPos, currentBoard)) {
                    neighborCount += 1;
                }

                */

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "one")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "two")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "three")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "four")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "five")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "six")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "seven")) {
                    neighborCount += 1;
                }

                if(neighborCheckAtPos(boardRowPos, cellPos, currentBoard, "eight")) {
                    neighborCount += 1;
                }

                // based on count of neighbors, decide if cell lives or dies in next gen

                /*
                    1. A live cell with
                     a. 4 + neighbors - dies of overcrowding
                     b. 0 or 1 neighbors - dies of isolation
                     c. 2 or 3 live neighbors - lives on to next gen

                    2. A dead cell with 3 live neighbors - becomes alive
                 */


                // CASE 1 - cell is alive
                if(cell) {
                    // 1.a
                    if(neighborCount >= 4) {
                        return false;
                    }

                    // 1.b
                    else if(neighborCount === 0 || neighborCount === 1) {
                        return false;
                    }

                    // 1.c
                    else if(neighborCount === 2 || neighborCount === 3) {
                        return true;
                    }
                }

                // CASE 2 - cell is not alive
                else if(!cell) {

                    //2.a
                    if(neighborCount === 3) {
                        return true;
                    }
                }



            });
        });
    }


    // resume playing
    play() {
        this.timer = setInterval( () =>{
            this.tick()
        }, 300);
        this.setState({isPlaying: true})

    }
    // pause the game
    pause() {
        clearInterval(this.timer);
        this.setState({isPlaying: false})

    }

    // randomize - clear board, setup new board, set state to 0
    randomize() {
        //clear current game
        clearInterval(this.timer);
        // setup new board, new state info
        this.setState({
           generations: 0,
           isPlaying: false,
           gameBoard: defaultBoard()
        });

    }


    render() {
        return (
            <div>
                <Header/>
                <Controls inPlay={this.state.isPlaying} onPlayClick={this.play} onPauseClick={this.pause}
                          onRandomizeClick={this.randomize}/>
                <GameBoardContainer generations={this.state.generations} board={this.state.gameBoard} inPlay={this.state.isPlaying}/>
            </div>
        )
    }
}

module.exports = GameOfLife;

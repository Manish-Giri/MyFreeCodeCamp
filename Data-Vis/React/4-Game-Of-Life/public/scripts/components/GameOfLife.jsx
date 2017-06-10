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
            if(board[ROWS-1][index-1]) {
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



class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameBoard: defaultBoard(),
            generations: 1
        }
        this.tick = this.tick.bind(this);
        this.nextBoard = this.nextBoard.bind(this);
    }

    tick() {
        this.setState(prevState => ({
            generations: prevState.generations + 1,
            gameBoard: this.nextBoard()

        }));
    }

    componentDidMount() {
        this.timer = setInterval(()=>{
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
                return cell = !cell;

                /*
                  -------------------------------------------------
                 for every cell, find count of it's neighbors
                 -------------------------------------------------

                */

                let neighborCount = 0;

                // FIND FIRST NEIGHBOR STATUS























                // based on count of it's neighbors, return if cell should be dead/alive in next gen















            });
        });
    }


    render() {
        return (
            <div>
                <Header/>
                <Controls/>
                <GameBoardContainer generations={this.state.generations} board={this.state.gameBoard}/>
            </div>
        )
    }
}

module.exports = GameOfLife;

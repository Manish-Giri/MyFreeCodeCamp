const React = require('react');
let GameCell = require('./GameCell');

class GameBoard extends React.Component {

    render() {
        let colors = ["lightgreen", "green"];
        /*const ROWS = 38;
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
        console.log(board);*/
        
        // generate playing board from board passed as props
        let board = this.props.board;
        let gameBoard = board.map(function (row, i) {
            
            return row.map(function (cell, index) {

                return (
                    <GameCell rowPos={i} cellPos={index} key={i.toString()+"-"+index.toString()} isAlive={cell}/>
                )
            })
            
        })
        return (
            <div className="board">
                {gameBoard}
            </div>
        )
    }

}

module.exports = GameBoard;

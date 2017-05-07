const React = require('react');
let GameCell = require('./GameCell');

class GameBoard extends React.Component {

    render() {
        let colors = ["lightgreen", "green"];
        const ROWS = 38;
        const COLS = 70;
        let cells = [];
        for(let i = 0; i < ROWS; i++) {
            for(let i = 0; i < COLS; i++) {
                let pos = Math.random() < 0.5;
                if(pos) {
                    cells.push(<GameCell bckg={colors[0]}/>)
                }
                else {
                    cells.push(<GameCell bckg={colors[1]}/>)
                }
            }
        }
        return (
            <div className="board">
                {cells}
            </div>
        )
    }

}

module.exports = GameBoard;

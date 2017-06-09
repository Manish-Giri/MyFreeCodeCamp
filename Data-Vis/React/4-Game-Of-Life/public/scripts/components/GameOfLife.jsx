const React = require('react');
let Header = require('./Header');
let Controls = require('./Controls');
let GameBoardContainer = require('./GameBoardContainer');


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


class GameOfLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameBoard: defaultBoard(),
            generations: 1
        }
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState(prevState => ({generations: prevState.generations + 1}));
    }

    componentDidMount() {
        this.timer = setInterval(()=>{
            this.tick()
        }, 300);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
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

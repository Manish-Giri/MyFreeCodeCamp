const React = require('react');
let Header = require('./Header');
let Controls = require('./Controls');
let GameBoard = require('./GameBoard');

class GameOfLife extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Controls/>
                <GameBoard/>
            </div>
        )
    }
}

module.exports = GameOfLife;

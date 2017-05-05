const React = require('react');
let Header = require('./Header');
let Controls = require('./Controls');
let GameBoardContainer = require('./GameBoardContainer');

class GameOfLife extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Controls/>
                <GameBoardContainer/>
            </div>
        )
    }
}

module.exports = GameOfLife;

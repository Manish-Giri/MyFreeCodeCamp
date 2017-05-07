const React = require('react');
let GameScore = require('./GameScore');
let GameBoard = require('./GameBoard');

class GameBoardContainer extends React.Component {
    render() {
        return (
            <div>
                <GameScore/>
                <GameBoard/>
            </div>
        )
    }
}

module.exports = GameBoardContainer;

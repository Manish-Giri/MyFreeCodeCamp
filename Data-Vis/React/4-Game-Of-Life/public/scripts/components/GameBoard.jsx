const React = require('react');
const GameScore = require('./GameScore');

class GameBoard extends React.Component {
    render() {
        return (
            <div>
                <GameScore/>
            </div>
        )
    }
}

module.exports = GameBoard;

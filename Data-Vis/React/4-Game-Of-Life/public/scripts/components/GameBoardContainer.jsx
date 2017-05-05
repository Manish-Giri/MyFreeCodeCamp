const React = require('react');
const GameScore = require('./GameScore');

class GameBoardContainer extends React.Component {
    render() {
        return (
            <div>
                <GameScore/>
            </div>
        )
    }
}

module.exports = GameBoardContainer;

const React = require('react');
let GameScore = require('./GameScore');
let GameBoard = require('./GameBoard');

class GameBoardContainer extends React.Component {
    render() {
        return (
            <div>
                <GameScore gen={this.props.generations}/>
                <GameBoard board={this.props.board}/>
            </div>
        )
    }
}

module.exports = GameBoardContainer;

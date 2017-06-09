const React = require('react');

class GameScore extends React.Component {
    render() {
        return (
            <div className="flex-container">
                <div id="title">Generations</div>
                <div id="gen">{this.props.gen}</div>
            </div>
        )
    }
}

module.exports = GameScore;

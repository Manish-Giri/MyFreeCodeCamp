const React = require('react');

class GameScore extends React.Component {
    render() {
        return (
            <div className="flex-container">
                <div id="title">Generations</div>
                <div id="gen">500</div>
            </div>
        )
    }
}

module.exports = GameScore;

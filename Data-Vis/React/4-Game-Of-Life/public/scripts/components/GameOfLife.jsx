const React = require('react');
let Header = require('./Header');
let Controls = require('./Controls')

class GameOfLife extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Controls/>
            </div>
        )
    }
}

module.exports = GameOfLife;

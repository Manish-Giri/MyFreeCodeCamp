const React = require('react');

class GameCell extends React.Component {
    render() {
        let bckgColor = this.props.bckg;
        let style = {
            backgroundColor: bckgColor
        }
        return (
            <span className="cell" style={style}></span>
        )
    }
}

module.exports = GameCell;

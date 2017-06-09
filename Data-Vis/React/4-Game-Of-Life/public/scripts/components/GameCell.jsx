const React = require('react');

class GameCell extends React.Component {


    render() {
        let colors = ["lightgreen", "green"];
        //let bckgColor = this.props.bckg;
        //let content = this.props.val;
        //let test = this.props.children;
        //let dummy = test ? true : false;
        let isAlive = this.props.isAlive;

        let style = {
            backgroundColor: isAlive ? colors[0] : colors[1]
        }
        return (
            <span className="cell" style={style}></span>
        )
    }
}

module.exports = GameCell;

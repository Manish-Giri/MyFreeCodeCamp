const React = require('react');

class GameCell extends React.Component {


    render() {
        //let bckgColor = this.props.bckg;
        //let content = this.props.val;
        //let test = this.props.children;
        //let dummy = test ? true : false;
        let isAlive = this.props.isAlive;
        let colors = ["lightgreen", "green", "black"];

        let style = {
            backgroundColor: isAlive ? colors[1] : colors[2]
        }
        return (
            <span className="cell" style={style}></span>
        )
    }
}

module.exports = GameCell;

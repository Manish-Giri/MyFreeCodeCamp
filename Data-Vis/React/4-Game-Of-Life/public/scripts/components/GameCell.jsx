const React = require('react');

class GameCell extends React.Component {


    render() {
        let colors = ["lightgreen", "green"];
        //let bckgColor = this.props.bckg;
        //let content = this.props.val;
        //let test = this.props.children;
        //let dummy = test ? true : false;
        let style = {
            backgroundColor: colors[0]
        }
        return (
            <span className="cell" style={style}></span>
        )
    }
}

module.exports = GameCell;

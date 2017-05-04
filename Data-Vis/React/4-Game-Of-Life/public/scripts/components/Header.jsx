const React = require('react');

class Header extends React.Component {
    render() {
        return (
            <div className="head">
                <h1 className="center-align">Conway's Game Of Life</h1>
            </div>
        )
    }
}

module.exports = Header;

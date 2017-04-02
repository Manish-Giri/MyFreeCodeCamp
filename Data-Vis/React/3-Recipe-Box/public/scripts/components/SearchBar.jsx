var React = require('react');

class SearchBar extends React.Component {
    render() {
        let style = {
            marginTop:"20px"
        };
        return (
            <div className="box searchbox">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..." />
                </div>
            </div>

        )
    }
}

module.exports = SearchBar;



var React = require('react');

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch(e) {
        let searchItem = e.target.value;
        this.props.onSearch(searchItem);
    }
    render() {
        let style = {
            marginTop:"20px"
        };
        return (
            <div className="box searchbox">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..." value={this.props.filterSearch} onChange={this.handleSearch}/>
                </div>
            </div>

        )
    }
}

module.exports = SearchBar;



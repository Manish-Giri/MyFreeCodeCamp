var React = require('react');
class NavBar extends React.Component{
    render() {
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo center">Recipe-Box</a>

                    </div>
                    <div className="nav-content">
                        <span className="nav-title">Title</span>
                        <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                            <i className="material-icons">add</i>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

module.exports = NavBar;

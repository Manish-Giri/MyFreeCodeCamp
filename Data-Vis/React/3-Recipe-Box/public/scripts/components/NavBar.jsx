var React = require('react');
class NavBar extends React.Component{
    render() {

        let style = {
            brandStyle:  {
                fontFamily: "'Spirax', cursive",
                fontSize: "34px"
            }
        };

        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo center" style={style.brandStyle}>Recipe-Box</a>

                        </div>
                        <div className="nav-content">
                            <span className="nav-title"></span>
                            <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal" href="#modal1">
                                <i className="material-icons">add</i>
                            </a>
                        </div>
                    </nav>
                </div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

$(document).ready(function() {
    $('#modal1').modal();
});

module.exports = NavBar;

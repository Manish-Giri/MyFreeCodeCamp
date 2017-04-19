var React = require('react');
class NavBar extends React.Component{

    constructor(props) {
        super(props);
        this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
        this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
        this.handleRecipeTagsChange = this.handleRecipeTagsChange.bind(this);
    }

    handleRecipeNameChange(e) {
        this.props.onRecipeNameChange(e.target.value);
    }

    handleRecipeIngredientsChange(e) {
        this.props.onRecipeIngredientsChange(e.target.value);
    }

    handleRecipeTagsChange(e) {
        this.props.onRecipeTagsChange(e.target.value);
    }

    render() {

        let style = {
            brand:  {
                fontFamily: "'Spirax', cursive",
                fontSize: "34px"
            },

            modal: {

                header: {
                    fontFamily: "'Macondo', cursive",
                    color: "#00897b"
                }

            }
        };

        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#!" className="brand-logo center" style={style.brand}>Recipe-Box</a>

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
                        <h2 style={style.modal.header}>Add A New Recipe</h2>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="input_text" type="text" data-length="10" value={this.props.filterName}/>
                                            <label htmlFor="input_text">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea" data-length="120" value={this.props.filterIngredientsText}></textarea>
                                        <label htmlFor="textarea1">Ingredients (separate with commas)</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea2" className="materialize-textarea" data-length="30" value={this.props.filterTagsText}></textarea>
                                        <label htmlFor="textarea2">Tags (separate with commas)</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/*<h4>Modal Header</h4>*/}
                        {/*<p>A bunch of text</p>*/}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn btn-floating btn-large green darken-4 pulse"><i className="material-icons">done</i></a>
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

var React = require('react');

let styles = {
  cardContent: {
    title: {
        color: "#4e342e",
        fontFamily:"'Playfair Display SC', serif",
        fontSize: 26,
        marginTop: -10,
        marginBottom: 10
    },

    tags: {
      marginBottom: -5
    },

    deleteButton: {
        marginTop: -5
    }
  },

  cardReveal: {
      header: {
          color: "#212121",
          fontFamily:"'Playfair Display SC', serif",
          padding: 5,
          margin: 10
      },

      title: {

      },

      items: {

          fontFamily: "'Open Sans', sans-serif"
      }

  },

    modal: {

        header: {
            fontFamily: "'Macondo', cursive",
            color: "#00897b"
        }

    }
};

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);

    }

    handleRecipeDelete(e) {
        console.log(e.target.value);
        console.log(this.props.index);
        //call onDelete event handler with number of recipecard to be deleted
        this.props.onDelete(this.props.index);
    }

    render() {
        var recipeName = this.props.recipe.name;
        var ingredients = this.props.recipe.ingredients.split(",").map(function (ingredient, index) {
            return <a href="#!" className="collection-item" key={index}>{ingredient}</a>
        });
        var tags = this.props.recipe.tags.split(",").map(function (tag, index) {
            return  <div className="chip" key={index}>{tag}<i className="close material-icons">close</i></div>
        });

        return (
            <div>
                <div className="card medium hoverable">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://search.chow.com/thumbnail/320/0/www.chowstatic.com/s/recipe_placeholder_main_img-710dbe7756144f55f01c42cc4892e6de.jpg"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-2"><i className="material-icons brown-text text-darken-4 right">more_vert</i></span>
                        <h1 style={styles.cardContent.title}>{recipeName}</h1>
                        {/*<p><a href="#">This is a link</a></p>*/}
                        <div id="tags" style={styles.cardContent.tags}>
                            {tags}
                        </div>
                        <a className="btn-floating pulse waves-effect waves-light red right" style={styles.cardContent.deleteButton} onClick={this.handleRecipeDelete}><i className="material-icons right">delete</i></a>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                        <h4 style={styles.cardReveal.header}>{recipeName}</h4>
                        {/*<h5>Ingredients</h5>*/}
                        <div className="collection">
                            {ingredients}
                        </div>
                        <a className="btn-floating btn-large waves-effect waves-light cyan darken-4 right pulse" href="#modal2"><i className="material-icons right">mode_edit</i></a>
                    </div>
                </div>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h2 style={styles.modal.header}>Add A New Recipe</h2>
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input id="input_text" type="text" data-length="10" value={this.props.filterName} onChange={this.handleRecipeNameChange}/>
                                        <label htmlFor="input_text">Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea" data-length="120" value={this.props.filterIngredientsText} onChange={this.handleRecipeIngredientsChange}></textarea>
                                        <label htmlFor="textarea1">Ingredients (separate with commas)</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <textarea id="textarea2" className="materialize-textarea" data-length="30" value={this.props.filterTagsText} onChange={this.handleRecipeTagsChange}></textarea>
                                        <label htmlFor="textarea2">Tags (separate with commas)</label>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/*<h4>Modal Header</h4>*/}
                        {/*<p>A bunch of text</p>*/}
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn btn-floating btn-large green darken-4 pulse" onClick={this.props.onSubmit}><i className="material-icons">done</i></a>
                    </div>
                </div>
            </div>
        )
    }
}


$(document).ready(function() {
    $('#modal2').modal();
});

module.exports = RecipeCard;

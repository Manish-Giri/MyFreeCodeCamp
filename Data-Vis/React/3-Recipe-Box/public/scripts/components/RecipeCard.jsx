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

  }
};

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
        this.onRecipeDelete = this.onRecipeDelete.bind(this);

    }

    onRecipeDelete(e) {
        console.log(e.target.value);
        console.log(this.props.index);
    }

    render() {
        var recipeKey = this.props.key;
        var recipeName = this.props.recipe.name;
        var ingredients = this.props.recipe.ingredients.split(",").map(function (ingredient, index) {
            return <a href="#!" className="collection-item" key={index}>{ingredient}</a>
        });
        var tags = this.props.recipe.tags.split(",").map(function (tag, index) {
            return  <div className="chip" key={index}>{tag}<i className="close material-icons">close</i></div>
        });

        return (
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
                    <a className="btn-floating pulse waves-effect waves-light red right" style={styles.cardContent.deleteButton} onClick={this.onRecipeDelete}><i className="material-icons right">delete</i></a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                    <h4 style={styles.cardReveal.header}>{recipeName}</h4>
                    {/*<h5>Ingredients</h5>*/}
                    <div className="collection">
                        {ingredients}
                    </div>
                    <a className="btn-floating btn-large waves-effect waves-light cyan darken-4 right pulse"><i className="material-icons right">mode_edit</i></a>
                </div>
            </div>
        )
    }
}

module.exports = RecipeCard;

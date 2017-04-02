var React = require('react');

let styles = {
  cardContent: {
    title: {
        color: "#212121",
        fontFamily:"'Playfair Display SC', serif",
        fontSize: 34,
        marginTop: -5
    },

    deleteButton: {

    }
  },

  cardReveal: {
      header: {
          color: "#5d4037",
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
    render() {
        return (
            <div className="card medium hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://search.chow.com/thumbnail/320/0/www.chowstatic.com/s/recipe_placeholder_main_img-710dbe7756144f55f01c42cc4892e6de.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-2"><i className="material-icons brown-text text-darken-4 right">more_vert</i></span>
                    <h1 style={styles.cardContent.title}>Sphagetti</h1>
                    {/*<p><a href="#">This is a link</a></p>*/}
                    <a className="btn-floating btn-large waves-effect waves-light red right"><i className="material-icons right">delete</i></a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                    <h4 style={styles.cardReveal.header}>Sphagetti</h4>
                    {/*<h5>Ingredients</h5>*/}
                    <div className="collection">
                        <a href="#!" className="collection-item"><span className="badge">1</span>Alvin</a>
                        <a href="#!" className="collection-item active"><span className="badge">1</span>Alvin</a>
                        <a href="#!" className="collection-item"><span className="badge">1</span>Alvin</a>
                        <a href="#!" className="collection-item"><span className="badge">1</span>Alvin</a>

                    </div>
                    <a className="btn-floating btn-large waves-effect waves-light cyan darken-4 right"><i className="material-icons right">mode_edit</i></a>
                </div>
            </div>
        )
    }
}

module.exports = RecipeCard;

var React = require('react');

let styles = {
  cardReveal: {
      header: {
          color: "#5d4037",
          fontFamily:"'Playfair Display SC', serif",
          padding: 2,
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
            <div className="card small hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://search.chow.com/thumbnail/320/0/www.chowstatic.com/s/recipe_placeholder_main_img-710dbe7756144f55f01c42cc4892e6de.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-2">Card Title<i className="material-icons orange-text text-darken-4 right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                    <h4 style={styles.cardReveal.header}>Sphagetti</h4>
                    {/*<h5>Ingredients</h5>*/}
                    <div className="collection">
                        <a href="#!" className="collection-item">Alvin</a>
                        <a href="#!" className="collection-item active">Alvin</a>
                        <a href="#!" className="collection-item">Alvin</a>
                        <a href="#!" className="collection-item">Alvin</a>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = RecipeCard;

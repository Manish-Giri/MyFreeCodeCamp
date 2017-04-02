var React = require('react');

class RecipeCard extends React.Component {
    render() {
        return (
            <div className="card small">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTr2pKKrAkoMKtvigT1fxPq1Ifc0mT40HVHou5gOE4tFoJKr7"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-2">Card Title<i className="material-icons orange-text text-darken-4 right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        )
    }
}

module.exports = RecipeCard;

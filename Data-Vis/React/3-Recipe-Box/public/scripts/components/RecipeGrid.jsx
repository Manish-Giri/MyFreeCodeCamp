var React = require('react');
var RecipeCard = require('./RecipeCard');

class RecipeGrid extends React.Component {
    render() {
        let style = {
            backgroundColor: "white",
            height: "50px",

        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l4"><p><RecipeCard/></p></div>
                    <div className="col s12 m4 l4"><p><RecipeCard/></p></div>
                    <div className="col s12 m4 l4"><p><RecipeCard/></p></div>
                </div>
            </div>
        )
    }
}

module.exports = RecipeGrid;

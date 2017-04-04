var React = require('React');
var RecipeGrid = require('./RecipeGrid');

class RecipeCollection extends React.Component {


    render() {
        var recipes = this.props.recipes;
        var recipeCount = recipes.length;

        return (
            <div>
                <RecipeGrid/>
            </div>
        )
    }
}

module.exports = RecipeCollection;

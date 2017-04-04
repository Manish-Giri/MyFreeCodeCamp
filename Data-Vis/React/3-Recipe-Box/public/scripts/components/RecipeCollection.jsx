var React = require('React');
var RecipeGrid = require('./RecipeGrid');

class RecipeCollection extends React.Component {


    render() {
        var recipes = this.props.recipes;
        var recipeCount = recipes.length;
        var recipeGridCount = 0;
        var recipeGrids = [];
        var recipeQuotient = 0;
        if(recipeCount % 3 === 0) {
            recipeQuotient = recipeCount / 3;
        }
         for(let i = 0; i < recipeQuotient; i++) {
             recipeGrids.push(<RecipeGrid recipe={recipes.slice(0,3)}/>)
         }

        return (
            <div>
                {/*<RecipeGrid/>*/}
                {recipeGrids}
            </div>
        )
    }
}

module.exports = RecipeCollection;

var React = require('react');
var RecipeCard = require('./RecipeCard');
class RecipeFlexContainer extends React.Component {
    render() {
        var gridRecipes = this.props.recipes;
        console.log(gridRecipes);
        var recipeCards = gridRecipes.map(function (recipe, index) {
            return <div className="recipe-item"><RecipeCard recipe={recipe} key={index}/></div>
        });
        return (
            <div className="flex-container">
                {recipeCards}
            </div>
        )
    }

}

module.exports = RecipeFlexContainer;

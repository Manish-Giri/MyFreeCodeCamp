var React = require('react');
var RecipeCard = require('./RecipeCard');

class RecipeFlexContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var gridRecipes = this.props.recipes;
        let onDelete = this.props.onRecipeDelete;
        console.log(gridRecipes);
        var recipeCards = gridRecipes.map(function (recipe, index) {
            return <div className="recipe-item" key={index}><RecipeCard recipe={recipe} key={index} index={index} onDelete={onDelete}/></div>
        });
        return (
            <div className="flex-container">
                {recipeCards}
            </div>
        )
    }

}

module.exports = RecipeFlexContainer;

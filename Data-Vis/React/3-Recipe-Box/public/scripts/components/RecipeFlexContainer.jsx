var React = require('react');
var RecipeCard = require('./RecipeCard');

class RecipeFlexContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var gridRecipes = this.props.recipes;
        let onDelete = this.props.onRecipeDelete;

        //second set of props
        let onRecipeNameEdit = this.props.onRecipeNameEdit;
        let onRecipeIngEdit = this.props.onRecipeIngredientsEdit;
        let onRecipeTagsEdit = this.props.onRecipeTagsEdit;
        let onRecipeEditSubmit = this.props.onRecipeEditSubmit;
        let onRecipeEditSelect = this.props.onRecipeEditSelect;

        let filterNameEdit = this.props.filterNameEdit;
        let filterIngredientsEdit = this.props.filterIngredientsEdit;
        let filterTagsEdit = this.props.filterTagsEdit;


        console.log(gridRecipes);
        var recipeCards = gridRecipes.map(function (recipe, index) {
            return <div className="recipe-item" key={index}>
                <RecipeCard recipe={recipe} key={index} index={index} onDelete={onDelete}
                            onRecNameEdit={onRecipeNameEdit}
                            onRecIngredientsEdit={onRecipeIngEdit}
                            onRecTagsEdit={onRecipeTagsEdit}
                            onRecEditSubmit={onRecipeEditSubmit}
                            filterNameEdit={filterNameEdit}
                            filterIngredientsEdit={filterIngredientsEdit}
                            filterTagsEdit={filterTagsEdit}
                            onRecipeEdit={onRecipeEditSelect}
                />
            </div>
        });
        return (
            <div className="flex-container">
                {recipeCards}
            </div>
        )
    }

}

module.exports = RecipeFlexContainer;

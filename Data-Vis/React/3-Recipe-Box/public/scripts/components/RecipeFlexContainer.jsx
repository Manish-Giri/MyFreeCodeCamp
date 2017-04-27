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

        //props for search
        let searchedItem = this.props.searchItem;


        console.log(gridRecipes);
        var recipeCards = [];

        if(searchedItem === "") {
            recipeCards = gridRecipes.map(function (recipe, index) {
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
        }

        else {
            console.log(`user searched for ${searchedItem}`);
            recipeCards = gridRecipes.filter(r => r.name.toLowerCase().indexOf(searchedItem) !== -1).map(function (recipe, index) {
                //console.log(recipe);
                return <div className="recipe-item" key={index}>
                    <RecipeCard recipe={recipe} key={index} index={index} onDelete={onDelete}
                                filterNameEdit={filterNameEdit}
                                filterIngredientsEdit={filterIngredientsEdit}
                                filterTagsEdit={filterTagsEdit}
                    />
                </div>

            })
            console.log(recipeCards);
            console.log(Array.isArray(recipeCards));
        }

        return (
            <div className="flex-container">
                {recipeCards}
            </div>
        )
    }

}

module.exports = RecipeFlexContainer;

/*
    This is the main container component - which will nest other presentational components
    - RecipeBoxApp
    ----- NavBar
    ----- SearchBar
    ----- RecipeCollection
    --------- RecipeGrid
    --------- Recipe (card)
 */

/*
 This is the main container component - which will nest other presentational components
 - RecipeBoxApp
 ----- NavBar
 ----- SearchBar
 ----- RecipeFlexContainer
 --------- Recipe (card)
 */

var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');
var SearchBar = require('./SearchBar');
var RecipeCollection = require('./RecipeCollection');
var RecipeFlexContainer = require('./RecipeFlexContainer');




class RecipeBoxApp extends React.Component {
    constructor(props) {
        super(props);
        var localData = localStorage.getItem("recipes");
        var recipes = (localData === "null") ? [] : JSON.parse(localData);
        this.state = {
            recipes: recipes,
            userSearch: ""

        };
        this.handleRecipeNameInput = this.handleRecipeNameInput.bind(this);
        this.handleRecipeIngredientsInput = this.handleRecipeIngredientsInput.bind(this);
        this.handleRecipeTagsInput = this.handleRecipeTagsInput.bind(this);
        this.newRecipe = {};


    }

    //event handlers
    // for NavBar
    handleRecipeNameInput(recipeName) {
        this.newRecipe.name = recipeName;
    }

    handleRecipeIngredientsInput(recipeIngredients) {
        let ings = recipeIngredients.split(",");
        this.newRecipe.ingredients = ings;
    }

    handleRecipeTagsInput(recipeTags) {
        let tags = recipeTags.split(",");
        this.newRecipe.tags = tags;
    }



    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar/>
                <RecipeFlexContainer recipes={this.state.recipes}/>

            </div>
        );
    }
}

module.exports = RecipeBoxApp;

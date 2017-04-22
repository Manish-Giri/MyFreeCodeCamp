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
        this.newRecipeObj = {};

        //bind event handlers
        this.handleRecipeNameInput = this.handleRecipeNameInput.bind(this);
        this.handleRecipeIngredientsInput = this.handleRecipeIngredientsInput.bind(this);
        this.handleRecipeTagsInput = this.handleRecipeTagsInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    //event handlers
    // for NavBar
    handleRecipeNameInput(recipeName) {
        this.newRecipeObj.name = recipeName;
    }

    handleRecipeIngredientsInput(recipeIngredients) {
        //let ings = recipeIngredients.split(",");
        this.newRecipeObj.ingredients = recipeIngredients;
    }

    handleRecipeTagsInput(recipeTags) {
        //let tags = recipeTags.split(",");
        this.newRecipeObj.tags = recipeTags;
    }

    handleSubmit() {
        let newRecipeArr = [this.newRecipeObj];
        let updatedRecipes = this.state.recipes.concat(newRecipeArr);
        //update local storage
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        this.setState({recipes: updatedRecipes});
    }

    handleDelete() {

    }



    render() {
        return (
            <div>
                <NavBar onRecipeNameChange={this.handleRecipeNameInput}
                        onRecipeIngredientsChange={this.handleRecipeIngredientsInput}
                        onRecipeTagsChange={this.handleRecipeTagsInput}
                        onSubmit={this.handleSubmit}
                        filterNameText={this.newRecipeObj.name}
                        filterIngredientsText={this.newRecipeObj.ingredients}
                        filterTagsText={this.newRecipeObj.tags}

                />
                <SearchBar/>
                <RecipeFlexContainer recipes={this.state.recipes}/>

            </div>
        );
    }
}

module.exports = RecipeBoxApp;

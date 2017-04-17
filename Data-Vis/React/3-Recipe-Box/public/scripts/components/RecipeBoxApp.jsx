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

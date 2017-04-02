/*
    This is the main container component - which will nest other presentational components
    - RecipeBoxApp
    ----- NavBar
    ----- SearchBar
    ----- RecipeCollection
    --------- RecipeGrid
    --------- Recipe (card)
 */

var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');
var SearchBar = require('./SearchBar');
var RecipeCollection = require('./RecipeCollection');

class RecipeBoxApp extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar/>
                <RecipeCollection/>

            </div>
        );
    }
}

module.exports = RecipeBoxApp;

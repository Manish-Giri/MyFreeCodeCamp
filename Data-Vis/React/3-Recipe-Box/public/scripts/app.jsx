var React = require('react');
var ReactDOM = require('react-dom');
var RecipeBox = require('./components/RecipeBoxApp');

// $(document).ready(function() {
//     $('#modal1').modal();
// });

//setup recipes
var recipes = [
    {
        name:"Baked Teriyaki Chicken", ingredients: "1 tablespoon cornstarch,12 skinless chicken thighs,1/2 teaspoon ground ginger,1 clove garlic minced,1/4 cup cider vinegar",
        tags: "japanese,entree"
    },
    {
        name:"Roasted Garlic Cauliflower", ingredients: "1 large head cauliflower,2 tablespoons minced garlic,1/2 teaspoon ground ginger,salt and black pepper to taste,3 tablespoons olive oil",
        tags: "side dish,bake,prep-fast"
    },
    {
        name: "Indian Eggplant - Bhurtha", ingredients: "1 eggplant, 2 tablespoons vegetable oil, 1/2 teaspoon cumin seeds, 1 medium onion sliced, 1/2 teaspoon ground turmeric",
        tags: "indian, entree, prep-moderate"

    },
    {
        name: "Indian Eggplant - Bhurtha", ingredients: "1 eggplant, 2 tablespoons vegetable oil, 1/2 teaspoon cumin seeds, 1 medium onion sliced, 1/2 teaspoon ground turmeric",
        tags: "indian, entree, prep-moderate"

    }

];

//setup local storage
localStorage.setItem("nixxRecipes", JSON.stringify(recipes));

ReactDOM.render(<RecipeBox recipes={recipes}/>, document.getElementById('root'));

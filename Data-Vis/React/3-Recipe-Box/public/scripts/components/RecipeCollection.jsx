var React = require('React');
var RecipeGrid = require('./RecipeGrid');

class RecipeCollection extends React.Component {
    render() {
        return (
            <div>
                <RecipeGrid/>
            </div>
        )
    }
}

module.exports = RecipeCollection;

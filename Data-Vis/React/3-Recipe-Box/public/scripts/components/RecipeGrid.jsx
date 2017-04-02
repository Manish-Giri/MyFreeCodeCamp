var React = require('react');

class RecipeGrid extends React.Component {
    render() {
        let style = {
            backgroundColor: "white",
            height: "50px",
          
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l4" style={style}><p>s12 m4</p></div>
                    <div className="col s12 m4 l4" style={style}><p>s12 m4</p></div>
                    <div className="col s12 m4 l4" style={style}><p>s12 m4</p></div>
                </div>
            </div>
        )
    }
}

module.exports = RecipeGrid;

//let UserInput = require('./UserInput')

//presentational component - textarea
let Greeting = React.createClass({
   render() {
       return (
           <div className="header">
               <h1>Markdown Previewer</h1>
           </div>
       )
   }
});
let UserInput = React.createClass({
    render() {
        let defText = this.props.default;
        return (
            <div className="display">
                <div className="row">
                    <div className="col-md-6" id="entry">
                        <textarea rows="21" cols="45" className="form-control"  placeholder="Enter text">{defText}</textarea>
                    </div>
                    <div className="col-md-6" id="rendered">

                    </div>
                </div>

            </div>
        )
    }
});



let AppContainer = React.createClass({
   getInitialState() {
       return {original: "# H1\n## H2\n### H3\n#### H4\n##### H5\n###### H6\n\nAlternatively, for H1 and H2, an underline-ish style:\n Alt-H1\n ======\n  Alt-H2\n  ------"};
   },

   render() {
       let defaultText = this.state.original;
       return (
        <div>
            <Greeting/>
            <UserInput default={defaultText}/>
        </div>

       )
   } 
});

ReactDOM.render(<AppContainer/>, document.getElementById("app"));

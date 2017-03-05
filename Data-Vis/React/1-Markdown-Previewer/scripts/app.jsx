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
        return (
            <div className="display">
                <div className="row">
                    <div className="col-md-6" id="entry">
                        <textarea rows="21" cols="45" className="form-control"  placeholder="Enter text"></textarea>
                    </div>
                    <div className="col-md-6" id="rendered">

                    </div>
                </div>

            </div>
        )
    }
});

let App = React.createClass({
   render() {
       return (
        <div>
            <Greeting/>
            <UserInput/>
        </div>

       )
   } 
});

ReactDOM.render(<App/>, document.getElementById("app"));

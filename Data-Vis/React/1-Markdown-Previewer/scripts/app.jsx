//let UserInput = require('./UserInput')
//remarkable settings
// Actual default values
var md = new Remarkable({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />)
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks
    linkify:      true,        // Autoconvert URL-like text to links

    // Enable some language-neutral replacement + quotes beautification
    typographer:  true,

    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: '“”‘’',

    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed
    highlight: function (/*str, lang*/) { return ''; }
});

//presentational component - header
let Greeting = React.createClass({
   render() {
       return (
           <div className="header">
               <h1>Markdown Previewer</h1>
           </div>
       )
   }
});

//presentational component - textarea
let UserInput = React.createClass({

    createMarkup(newText) {
        return {__html: newText}
    },
    render() {
        let defaultText = this.props.default;
        return (
            <div className="display">
                <div className="row">
                    <div className="col-md-6" id="entry">
                        <textarea rows="21" cols="45" className="form-control"  placeholder="Enter text">{defaultText}</textarea>
                    </div>
                    <div className="col-md-6" id="rendered" dangerouslySetInnerHTML={this.createMarkup(this.props.newText(defaultText))}>

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

   convert(old) {
       let newValue = md.render(old);
        return newValue;
   } ,

   handleConvert(old) {
       let oldValue = this.state.original;
       let converted = md.render(oldValue);
       this.setState({original: converted});
   },

   render() {
       let defaultText = this.state.original;
       return (
        <div>
            <Greeting/>
            <UserInput default={defaultText} onSubmit={this.handleConvert} newText={this.convert}/>
        </div>

       )
   } 
});

ReactDOM.render(<AppContainer/>, document.getElementById("app"));

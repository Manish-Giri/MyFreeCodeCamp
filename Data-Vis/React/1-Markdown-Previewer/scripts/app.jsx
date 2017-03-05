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



    generateMarkdown(event) {
        let messageRef = this.refs.userMessage;
        let messageVal = messageRef.value;
        event.which = event.which || event.keyCode;
        if(event.which == 13) {
            //enter clicked
            console.log(messageVal);
            //alert("Enter pressed");
            //call parent component with new value
            this.props.onConvert(messageVal);

        }
    },
    render() {
        let defaultText = this.props.latest;
        let defaultMarkdown = this.props.firstMDRender();
        return (
            <div className="display">
                <div className="row">
                    <div className="col-md-6" id="entry">
                        <textarea rows="21" cols="45" className="form-control"  placeholder="Enter text" ref="userMessage" onKeyDown={this.generateMarkdown}>{defaultText}</textarea>
                    </div>
                    <div className="col-md-6" id="rendered" dangerouslySetInnerHTML={this.createMarkup(defaultMarkdown)}>

                    </div>
                </div>

            </div>
        )
    }
});



let AppContainer = React.createClass({
   getInitialState() {
       return {original: "# H1\n## H2\n### H3\n Emphasis, aka italics, with *asterisks* or _underscores_. \n Strong emphasis, aka bold, with **asterisks** or __underscores__.\n" +
       " Combined emphasis with **asterisks and _underscores_**.\n Strikethrough uses two tildes. ~~Scratch this.~~\n"+
       "\n Inline-style image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png \"Logo Title Text 1\")\n "+
       " [I'm an inline-style link](https://www.google.com)\n [I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")\n\n" +
       " 1. First ordered list item\n 2. Another item\n ⋅⋅* Unordered sub-list.\n 1. Actual numbers don't matter, just that it's a number\n ⋅⋅1. Ordered sub-list\n 4. And another item.\n\n"+
        " Inline `code` has `back-ticks around` it.\n ```\n var s = \"JavaScript syntax highlighting\"; \n alert(s);\n```"
       };
   },

   firstConvert() {
       let firstRender = md.render(this.state.original);
        return firstRender;
   } ,

   handleConvert(userInput) {
       if(userInput.length > 0) {
           let converted = md.render(userInput);
           this.setState({original: converted});
       }
       //let oldValue = this.state.original;
   },

   render() {
       let latestText = this.state.original;
       return (
        <div>
            <Greeting/>
            <UserInput latest={latestText} onConvert={this.handleConvert} firstMDRender={this.firstConvert}/>
        </div>

       )
   } 
});

ReactDOM.render(<AppContainer/>, document.getElementById("app"));

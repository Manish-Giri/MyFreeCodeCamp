const Header = () => {
    return <h1 className="header">Force Directed Graph of State Contiguity</h1>
};

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            edges: []
        }
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json')
            .then( response => {
                // console.log(response);
                // set up nodes
                let vertices = response.data.nodes.map((object, index) => {
                    return {
                        id: index,
                        label: object.country,
                        flag: `https://github.com/hjnilsson/country-flags/raw/master/png100px/${object.code}.png`
                    }
                });
                // console.log(n);
                // setup edges
                let links = response.data.links.map(link => {
                    return {
                        from: link.source,
                        to: link.target
                    }
                });
                this.setState({nodes: vertices, edges: links});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let graph = {
            nodes: this.state.nodes,
            edges: this.state.edges
        };

        let options = {
            
        }
        return <h3 nodes={this.state.nodes}>Chart here</h3>
    }
}

const App = () => {
        return (
            <div>
                <Header/>
                <Chart/>
            </div>
        )
}


ReactDOM.render(<App />, document.getElementById("main"));

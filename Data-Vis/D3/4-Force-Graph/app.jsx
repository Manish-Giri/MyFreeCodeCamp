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
                        image: `https://github.com/hjnilsson/country-flags/raw/master/png100px/${object.code}.png`,
                        shape: "circularImage",
                        size: 15,
                        color: {
                            border: "#222"
                        },
                        font: {
                            color: "#eeeeee",
                            face: "Open Sans', sans-serif"
                        }
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
            layout: {
                hierarchical: false,
                improvedLayout:false
            },
            height: '100%',
            width: '100%',
            edges: {
                color: "#efefef",
                arrows: { to: { enabled: false } },
            },
            nodes: {
                shapeProperties: {
                    interpolation: false    // 'true' for intensive zooming
                }
            }
        };

        let styles = {
            width: "90%",
            height: "100%",
            border: "1px solid red",
            margin: "5px auto"
        };

        return (
            <div className="chart">
                <ReactGraphVis.default graph={graph} options={options} style={styles}/>
            </div>
        )

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

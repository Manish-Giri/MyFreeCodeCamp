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
        axios.get('https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json').then(response => {
            // console.log(response);
            // set up nodes
            let vertices = response.data.nodes.map((object, index) => {
                return {
                    id: index,
                    label: object.country,
                    image: `https://github.com/hjnilsson/country-flags/raw/master/png100px/${object.code}.png`,
                    borderWidth: 2,
                    borderWidthSelected: 5,
                    brokenImage: 'https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/fr.png',
                    chosen: {
                        node: function (values, id, selected, hovering) {
                            // values.size = 26;
                            values.borderColor = "red";
                            values.shadow = true;
                        },
                        label: function (values, id, selected, hovering) {
                            values.size = 18;
                            values.mod = "bold"
                        }
                    },
                    color: {
                        border: "#222",
                        hover: {
                            border: "#2B7CE9"
                        }
                    },
                    font: {
                        color: "#eeeeee",
                        face: "Open Sans', sans-serif",
                        size: 18,
                        bold: "18px solid '#eee'"
                    },
                    shape: "circularImage",
                    size: 15,
                    shapeProperties: {
                        interpolation: true,
                        size: 26
                    }

                }
            });
            // console.log(n);
            // setup edges
            let links = response.data.links.map(link => {
                return {from: link.source, to: link.target}
            });
            this.setState({nodes: vertices, edges: links});
        }).catch(function(error) {
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
                improvedLayout: false
            },
            height: '100%',
            width: '100%',
            edges: {
                color: "#efefef",
                arrows: {
                    to: {
                        enabled: false
                    }
                },
                chosen: {
                  edge: function (values, id, selected, hovering) {
                      values.toArrow = true;

                  }
                },
            }

        };

        let styles = {
            width: "98%",
            height: "100%",
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

ReactDOM.render(
    <App/>, document.getElementById("main"));

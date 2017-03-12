//the app will have these components -
/**
 * --- FilterableLeaderBoard
 * -------- LeaderBoardTable - done
 * -------------- TableHeader - done
 * -------------- TableControls - done
 * -------------- LeaderBoardTableCategory
 * -------------- LeaderBoardTableRow
 */


class LeaderBoardTableCategory extends React.Component {
    render() {
        const headings = {
            rank : "#",
            name : "Camper User-Name",
            thirty: "Points in past 30 days",
            all: "All time points"
        };
        let rowStyle = {
            height: 40
        };

        return (
            <tr style={rowStyle}>
                <td>{headings.rank}</td>
                <td>{headings.name}</td>
                <td>{headings.thirty}</td>
                <td>{headings.all}</td>
            </tr>
        )
    }
}

class LeaderBoardTableRow extends React.Component {
    render() {
        let rank = this.props.rank;
        let image = this.props.image;
        let name = this.props.name;
        let recent = this.props.recent;
        let alltime = this.props.alltime;
        let rows = [];
        let rowStyle = {
            lineheight: 50
        };
        let imageStyles = {
            width: 50,
            height: 50,
            marginRight: 40,
            border: "2px solid #33691e",
            borderRadius: "100%"
        };
        /*
          entries.map((entry, index) => {
           let pos = index + 1;
           rows.push("<tr><td>" + pos + "</td><td>" + entry.username + "</td><td>" + entry.recent + "</td><td>"+ entry.alltime +"</td></tr>");
        });*/

        return (
            <tr style={rowStyle}>
                <td>{rank}</td>
                <td><img src={image} alt={name} title={name} style={imageStyles}/> {name}</td>
                <td>{recent}</td>
                <td>{alltime}</td>
            </tr>
        )
    }
}


class TableHeader extends React.Component {
    render() {
        return (
            <div className="tb-head">
                LEADERBOARD
            </div>
        )
    }
}

class TableControls extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let isChecked = e.target.checked;
        this.props.onInputChange(isChecked);
    }

    render() {
        let isChecked = this.props.checked;
        return (
            <div className="switch">
                <label>
                    Thirty Days
                    <input type="checkbox" checked={isChecked} ref="choice" onChange={this.handleChange}/>
                        <span className="lever"></span>
                        All Time
                </label>
            </div>
        );
    }
}

class LeaderBoardTable extends React.Component {

    render() {
        let results = this.props.results;
        let userList = results.map((entry, index) => {
            let pos = index+1;
            return (
                <LeaderBoardTableRow key={pos} rank={pos} image={entry.img} name={entry.username} recent={entry.recent} alltime={entry.alltime} />
            )
        });
        return (
            <div>
                <div className="tb-top">
                    <TableHeader />
                    <TableControls checked={this.props.checked} onInputChange={this.props.onInputChange}/>
                </div>
                <div className="table-holder">
                    <table className="table table-bordered">
                        <thead>
                        <LeaderBoardTableCategory/>
                        </thead>

                        <tbody>
                        {userList}


                        </tbody>
                    </table>

                </div>

            </div>
        )
    }

}



class FilterableLeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            isChecked: false,
            thirtyDayBoard: [],
            allTimeBoard: [],
            resultsToShow: [],

        };
    }

    componentDidMount() {
         axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then(res => {
             const thirty = res.data;
             console.log(thirty);
             this.setState({thirtyDayBoard: thirty});


         });

         axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then(res => {
             const allTime = res.data;
             console.log(allTime);
             this.setState({allTimeBoard: allTime});
         });

    }

    handleInputChange(value) {
        if(value) {
            this.setState({isChecked:true, resultsToShow: this.state.allTimeBoard});
        }
        else {
            this.setState({isChecked:false, resultsToShow: this.state.thirtyDayBoard});
        }
    }

    render() {


        return (
            <div className="main-container light-green darken-4">
                <LeaderBoardTable results={this.state.resultsToShow} checked={this.state.isChecked} onInputChange={this.handleInputChange}/>
            </div>
        )
    }
}

























ReactDOM.render(<FilterableLeaderBoard />, document.getElementById("root"));

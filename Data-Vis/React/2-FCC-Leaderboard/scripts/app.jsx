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

        return (
            <tr>
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
        let name = this.props.name;
        let recent = this.props.recent;
        let alltime = this.props.alltime;
        let rows = [];
        /*
          entries.map((entry, index) => {
           let pos = index + 1;
           rows.push("<tr><td>" + pos + "</td><td>" + entry.username + "</td><td>" + entry.recent + "</td><td>"+ entry.alltime +"</td></tr>");
        });*/

        return (
            <tr>
                <td>{rank}</td>
                <td>{name}</td>
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
    render() {
        return (
            <div className="switch">
                <label>
                    Thirty Days
                    <input type="checkbox" />
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
                <LeaderBoardTableRow rank={pos} name={entry.username} recent={entry.recent} alltime={entry.alltime} />
            )
        });
        return (
            <div>
                <div className="tb-top">
                    <TableHeader />
                    <TableControls/>
                </div>
                <div className="table-holder">
                    <table className="table table-bordered">
                        <thead>
                        <LeaderBoardTableCategory/>
                        </thead>

                        <tbody>
                        {userList}

                        {/*
                         <tr>
                         <td>Alvin</td>
                         <td>Eclair</td>
                         <td>$0.87</td>
                             <td>$0.87</td>
                         </tr>
                         <tr>
                         <td>Alan</td>
                         <td>Jellybean</td>
                         <td>$3.76</td>
                             <td>$0.87</td>
                         </tr>
                         <tr>
                         <td>Jonathan</td>
                         <td>Lollipop</td>
                         <td>$7.00</td>
                             <td>$0.87</td>
                         </tr>
                         */}


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
        this.state = {
            showAllTimePoints: false,
            thirtyDayBoard: [],
            allTimeBoard: []

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

    render() {


        return (
            <div className="main-container light-green darken-4">
                <LeaderBoardTable results={this.state.thirtyDayBoard}/>
            </div>
        )
    }
}

























ReactDOM.render(<FilterableLeaderBoard />, document.getElementById("root"));

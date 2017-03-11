//the app will have these components -
/**
 * --- FilterableLeaderBoard
 * -------- LeaderBoardTable
 * -------------- TableHeader
 * -------------- TableControls
 * -------------- LeaderBoardTableCategory
 * -------------- LeaderBoardTableRow
 */



class FilterableLeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAllTimePoints: false,
            thirtyDayBoard: [],
            allTimeBoard: []

        };
    }

    render() {




        return (
            <div>
            </div>
        )
    }
}

























ReactDOM.render(<FilterableLeaderBoard />, document.getElementById("root"));

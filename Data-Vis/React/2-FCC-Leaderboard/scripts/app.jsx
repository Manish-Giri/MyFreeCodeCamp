//the app will have these components -
/**
 * --- FilterableLeaderBoard
 * -------- PageHeader
 * -------- LeaderBoardTable
 * -------------- TableHeader
 * -------------- TableControls
 * -------------- LeaderBoardTableCategory
 * -------------- LeaderBoardTableRow
 */


class PageHeader extends React.Component {
    render() {
        return (
            <div className="header">
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

    render() {




        return (
            <div>
                <PageHeader />
            </div>
        )
    }
}

























ReactDOM.render(<FilterableLeaderBoard />, document.getElementById("root"));

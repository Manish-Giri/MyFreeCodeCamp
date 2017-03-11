//the app will have these components -
/**
 * --- FilterableLeaderBoard
 * -------- Header
 * -------- LeaderBoardTable
 * -------------- TableHeader
 * -------------- TableControls
 * -------------- LeaderBoardTableCategory
 * -------------- LeaderBoardTableRow
 */

class FilterableLeaderBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showAllTimePoints: false};
    }
}

























ReactDOM.render(<FilterableLeaderBoard />, document.getElementById("root"));

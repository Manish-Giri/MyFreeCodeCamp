//the app will have these components -
/**
 * --- FilterableLeaderBoard
 * -------- LeaderBoardTable
 * -------------- TableHeader
 * -------------- TableControls
 * -------------- LeaderBoardTableCategory
 * -------------- LeaderBoardTableRow
 */



class LeaderBoardTable extends React.Component {

    render() {
        return (
            <div className="table-holder">
                <table className="bordered">
                    <thead>
                    <tr>
                        <th data-field="id">Name</th>
                        <th data-field="name">Item Name</th>
                        <th data-field="price">Item Price</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Alvin</td>
                        <td>Eclair</td>
                        <td>$0.87</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                        <td>Jellybean</td>
                        <td>$3.76</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                        <td>Lollipop</td>
                        <td>$7.00</td>
                    </tr>
                    </tbody>
                </table>

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
            <div className="main-container light-green darken-4">
                <LeaderBoardTable />
            </div>
        )
    }
}

























ReactDOM.render(<FilterableLeaderBoard />, document.getElementById("root"));

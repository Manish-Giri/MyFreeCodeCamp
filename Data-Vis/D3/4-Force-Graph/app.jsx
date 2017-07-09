const Header = () => {
    return <h1 className="header">Monthly Global Land-Surface Temperature</h1>
};

class Chart extends React.Component {

}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}




ReactDOM.render(<App />, document.getElementById("main"));

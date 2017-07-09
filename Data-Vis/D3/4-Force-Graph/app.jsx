const Header = () => {
    return <h1 className="header">Force Directed Graph of State Contiguity</h1>
};

class Chart extends React.Component {

}

const App = () => {
        return (
            <div>
                <Header/>
            </div>
        )
}


ReactDOM.render(<App />, document.getElementById("main"));

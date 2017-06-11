const React = require('react');

class Controls extends React.Component {
    render() {

        let isPlaying = this.props.inPlay;
        let handlePause = this.props.onPauseClick;
        let handlePlay = this.props.onPlayClick;
        let handleRandomize = this.props.onRandomizeClick;
        return (
            <div className="controls container">
                <div className="row">

                    <div className="col s3">
                        {/*<i className="material-icons">play_arrow</i>*/}
                        {/*<i className="material-icons">pause</i>*/}
                        <a className="waves-effect waves-light btn green darken-4" onClick={isPlaying ? handlePause: handlePlay}><i className="material-icons left">play_arrow</i>{isPlaying ? "Pause" : "Play"}</a>
                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn green darken-4" onClick={handleRandomize}><i className="material-icons left">shuffle</i>Randomize</a>

                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn green darken-4"><i className="material-icons left">clear_all</i>Clear</a>
                    </div>
                    <div className="col s3">
                        <a className='dropdown-button btn green darken-4' href='#' data-activates='dropdown1'><i className="material-icons left">settings</i>Speed</a>

                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#!">Slow</a></li>
                            <li><a href="#!">Medium</a></li>
                            <li><a href="#!">Fast</a></li>
                        </ul>

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = Controls;

const React = require('react');

class Controls extends React.Component {

    constructor(props) {
        super(props);
        this.handleSlowClick = this.handleSlowClick.bind(this);
        this.handleMediumClick = this.handleMediumClick.bind(this);
        this.handleFastClick = this.handleFastClick.bind(this);

    }

    // speed selection
    handleSlowClick(e) {
        this.props.onSlowSpeed();
    }

    handleMediumClick(e) {
        this.props.onMediumSpeed();
    }

    handleFastClick(e) {
        this.props.onFastSpeed();
    }

    render() {

        let isPlaying = this.props.inPlay;
        let handlePause = this.props.onPauseClick;
        let handlePlay = this.props.onPlayClick;
        let handleRandomize = this.props.onRandomizeClick;
        let handleClear = this.props.onClearClick;
        return (
            <div className="controls container">
                <div className="row">

                    <div className="col s3">
                        <a className="waves-effect waves-light btn green darken-4" onClick={isPlaying ? handlePause: handlePlay}><i className="material-icons left">play_arrow</i>{isPlaying ? "Pause" : "Play"}</a>
                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn green darken-4" onClick={handleRandomize}><i className="material-icons left">shuffle</i>Randomize</a>

                    </div>
                    <div className="col s3">
                        <a className="waves-effect waves-light btn green darken-4" onClick={handleClear}><i className="material-icons left">clear_all</i>Clear</a>
                    </div>
                    <div className="col s3">
                        <a className='dropdown-button btn green darken-4' href='#' data-activates='dropdown1'><i className="material-icons left">settings</i>Speed</a>

                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#!" onClick={this.handleSlowClick}>Slow</a></li>
                            <li><a href="#!" onClick={this.handleMediumClick}>Medium</a></li>
                            <li><a href="#!" onClick={this.handleFastClick}>Fast</a></li>
                        </ul>

                    </div>

                </div>

            </div>
        )
    }
}

module.exports = Controls;

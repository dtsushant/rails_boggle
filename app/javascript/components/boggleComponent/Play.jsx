import React from "react";
import { connect } from 'react-redux';
import Timer from "./includes/Timer";
import { countdown } from './boggleReducers/actions/timerActions';
import ScoreCard from "./ScoreCard";



class Play extends React.Component {

    componentDidMount() {
        this.boardLayout();
    }

    componentDidUpdate() {
        const { timeLeft } = this.props;
        if (timeLeft < 1) {
            clearInterval(this.interval);
        }
    }

    boardLayout() {

        this.initTimer();
    }








    initTimer() {
        const { countdown } = this.props;
        this.interval = setInterval(() => {
            countdown();
        }, 1000);
    }




    convertTime = () => {
        const { timeLeft } = this.props;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft - minutes * 60;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return minutes + ":" + seconds;
    }


    render() {
        return (
            <div className='scoreTimeContainer'>
                <Timer timeToPlay={this.convertTime()}/>
                <ScoreCard wordsFound = {this.props.wordFound} timeToPlay={this.props.timeLeft}/>
            </div>

        )
    }
}





const mapStateToProps = state => {
    return {
        timeLeft: state.timer.timeLeft,
        wordFound: state.word.wordFound

    }
}

const mapDispatchToProps = dispatch => ({
    countdown: () => dispatch(countdown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Play);





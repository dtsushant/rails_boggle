//had to create this page to separate the timer out of the board game component, the timer was reloading the whole component everytime
import React, { Component } from 'react';
import Play from "./Play";
import SetupBoard from "./SetupBoard";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {countdown} from "./boggleReducers/actions/timerActions";
class GameWrapper extends Component{
    render() {
        return (
            <div>
                <div className='boggleBoard'>
                    <SetupBoard />
                     <Play />
                </div>
                {this.afterTimeExpire()}
            </div>
        );
    }


    afterTimeExpire(){
        const { timeLeft } = this.props
        if(timeLeft<1){
            return <Link
                to="/boggle/play"
                className="btn btn-lg custom-button"
                role="button"
                onClick={this.resetGame}
            >
                Play Another Game
            </Link>
        }
    }

    resetGame(){
        window.location.reload();
    }

}

const mapStateToProps = state => {
    return {
        timeLeft: state.timer.timeLeft
    }
}

const mapDispatchToProps = dispatch => ({
    countdown: () => dispatch(countdown()),
})

export default connect(mapStateToProps,mapDispatchToProps())(GameWrapper);

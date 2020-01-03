import { STOP_COUNTDOWN, RESET_TIMER, COUNTDOWN } from '../actions/timerActions';

const initialState = {
    timeLeft: 180
}

const timer = (state = initialState, action) => {
    switch (action.type) {

        case COUNTDOWN:
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
            });

        default:
            return state
    }
}

export default timer;
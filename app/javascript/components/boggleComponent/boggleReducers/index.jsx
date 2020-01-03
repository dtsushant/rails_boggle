import { combineReducers } from 'redux'
import timer from './reducers/timer'
import word from "./reducers/word";



export default combineReducers({
    timer,word
})


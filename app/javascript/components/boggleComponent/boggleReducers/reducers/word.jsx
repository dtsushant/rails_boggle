import { SET_CURRENT_WORD, SET_LETTER_ARR,SET_WORD_FOUND } from '../actions/wordActions';

const initialState = {
    currentWordFormed: '',
    letterArray: [],
    selectedLettersIndexArr: [],
    wordFound:[],
}

const word = (state = initialState, action) => {
    switch (action.type) {
        case SET_LETTER_ARR:
            return Object.assign({}, state, {
                letterArray: action.value.newBoardArr,
            });

        case SET_CURRENT_WORD:
            return Object.assign({}, state, {
                currentWordFormed: action.value.currentWordFormed,
                selectedLettersIndexArr: action.value.selectedLettersIndexArr,
            });

        case SET_WORD_FOUND:
            console.log("setting word found")
            console.log(action)
            return Object.assign({}, state, {
                wordFound: action.value.wordFound,
            });


        default:
            return state
    }
}

export default word;
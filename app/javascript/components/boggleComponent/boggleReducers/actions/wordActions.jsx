//action types
export const SET_CURRENT_WORD = 'SET_CURRENT_WORD';
export const SET_LETTER_ARR = 'SET_LETTER_ARR';
export const SET_WORD_FOUND = 'SET_WORD_FOUND';


export function setCurrentWord(currentWord, selectedLettersIndexArr) {

    return { type: SET_CURRENT_WORD, value: { currentWordFormed: currentWord, selectedLettersIndexArr } }
}

export function setLetterArr(shuffledArr) {
    return { type: SET_LETTER_ARR, value: { newBoardArr: shuffledArr } }
}

export function setWordFound(wordFound) {
    console.log("the word found "+wordFound)
    return { type: SET_WORD_FOUND, value: { wordFound: wordFound } }
}
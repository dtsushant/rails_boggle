import React from "react";
import {setLetterArr, setCurrentWord,setWordFound} from "./boggleReducers/actions/wordActions";
import {connect} from "react-redux";
import WordSelections from "./includes/WordSelections";
import {nextAllowedClick} from "../../boggleUtil/nextAllowedClick";
import LetterButton from "./includes/LetterButton";


let newCurrentWord = '';
let currentWordArr = [];
let selectedLettersIndexArr = [];
let wordFound = []
let wordArr = []
class SetupBoard extends React.Component {
    componentDidMount() {
        this.setupBoard();
    }

    setupBoard(){
        const { setLetterArr } = this.props;

        const url = `/com/assurance/boggle/lettersForBoard`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                    console.log("the response is");
                    console.log(response);
                    setLetterArr(response)
                }
            )
            .catch(() => this.props.history.push("/boggle"));

    }

    letterSelect(letter,key){
        //assign value from redux to newCurrentGuess and convert to array
        newCurrentWord = this.props.currentWordFormed;
        currentWordArr = newCurrentWord.split('');

        //if current guess is empty then clear selectedLettersIndexArr
        if (currentWordArr.length === 0) {
            selectedLettersIndexArr = [];
        }

        //check if letter index has already been selected and remove it if it is last in array
        if (selectedLettersIndexArr.includes(key)) {
            if (selectedLettersIndexArr.indexOf(key) === selectedLettersIndexArr.length - 1) {
                currentWordArr = currentWordArr.splice(0, currentWordArr.length - 1);
                selectedLettersIndexArr = selectedLettersIndexArr.splice(0, selectedLettersIndexArr.length - 1);
            }
        }else if (selectedLettersIndexArr.length <= 0 || this.findNextClickableLetters().includes(key)) {
            currentWordArr.push(letter);
            selectedLettersIndexArr.push(key);
        }



        newCurrentWord = currentWordArr.join('');
        this.props.setCurrentWord(newCurrentWord,selectedLettersIndexArr);

        if(currentWordArr.length >= 3 && !wordArr.includes(currentWordArr.join(''))){
            this.postLetterForVerification(currentWordArr.join(''))
        }
    }

    postLetterForVerification(currentWord){
        const url = `/com/assurance/boggle/wordValidator`;
        const { letterArray } = this.props
        const body = {
            currentWord: currentWord,
            letterArray:letterArray
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                if(response.value==='true'){
                    let wordMap = {}
                    wordMap['word'] =response.word
                    wordMap['score'] =response.score
                    wordFound.push(wordMap)
                    wordArr.push(response.word)
                    this.props.setWordFound(wordFound);
                    this.clearWordClick();
                }
            })
            .catch(error => console.log(error.message));
    }

    findNextClickableLetters(){
        let currIdx = selectedLettersIndexArr[selectedLettersIndexArr.length - 1];
        let validIndexArr =[]
        if (currIdx != null) {
            validIndexArr = nextAllowedClick[currIdx];
        }
        return validIndexArr
    }

    clearWordClick = () => {
        selectedLettersIndexArr = []
        this.props.setCurrentWord('',[]);
    }

    render(){
        console.log("rendering letter board");
        return (
            <div className='letterBoard'>

                <table>
                    <tbody>

                    {this.props.letterArray.reduce((result, letter, index) => {
                        result[index / 4 | 0].push(
                            <td>
                                <LetterButton
                                    index={index}
                                    value={letter}
                                    disabled={this.props.timeLeft<1}
                                    onClick={() => this.letterSelect(letter, index)}
                                    active={this.props.selectedLettersIndexArr.includes(index) ? "activeLetter" : "inactive"}
                                    allowedNextWordClick={this.findNextClickableLetters().includes(index)?"nextAllowed":"notAllowed"}
                                />

                            </td>)
                        return result
                    }, [[], [], [], []]).map(row => {
                        return <tr>{row}</tr>
                    })}
                    </tbody>
                </table>

                <WordSelections currentWordFormed = {this.props.currentWordFormed} clearWordClick={this.clearWordClick}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        timeLeft: state.timer.timeLeft,
        letterArray: state.word.letterArray,
        currentWordFormed: state.word.currentWordFormed,
        selectedLettersIndexArr: state.word.selectedLettersIndexArr,
        currentSelectionIndex: state.word.currentSelectionIndex,
        wordFound: state.word.wordFound,
    }
}

const mapDispatchToProps = dispatch => ({
    setLetterArr: (shuffledArr) => dispatch(setLetterArr(shuffledArr)),
    setCurrentWord: (currentWord, selectedLettersIndexArr) => dispatch(setCurrentWord(currentWord, selectedLettersIndexArr)),
    setWordFound: (wordsFound) => dispatch(setWordFound(wordsFound)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetupBoard);

